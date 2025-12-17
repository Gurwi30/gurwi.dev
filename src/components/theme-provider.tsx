"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
    undefined,
);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "ui-theme",
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(
        "light",
    );
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const stored = localStorage.getItem(storageKey) as Theme | null;
        if (stored) setThemeState(stored);

        setMounted(true);
    }, [storageKey]);

    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;

        const applyTheme = (t: "light" | "dark") => {
            root.classList.remove("light", "dark");
            root.classList.add(t);
            setResolvedTheme(t);
        };

        if (theme === "system") {
            const media = window.matchMedia("(prefers-color-scheme: dark)");
            applyTheme(media.matches ? "dark" : "light");

            const listener = (e: MediaQueryListEvent) => applyTheme(e.matches ? "dark" : "light");
            
            media.addEventListener("change", listener);
            return () => media.removeEventListener("change", listener);
        }
        
        applyTheme(theme);
    }, [theme, mounted]);

    const setTheme = (t: Theme) => {
        localStorage.setItem(storageKey, t);
        setThemeState(t);
    };

    if (!mounted) return null;

    return (
        <ThemeProviderContext.Provider
            value={{ theme, resolvedTheme, setTheme }}
        >
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (!context)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
