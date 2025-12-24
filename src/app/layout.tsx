import type { Metadata } from "next";
import { ReactLenis } from "@/lib/lenis";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { greatVibes, homemadeApple, inter, playfair } from "@/app/fonts";
import "./globals.css";
import { isChristmas } from "../util/christmas";
import SnowfallWrapper from "@/components/wrappers/snowfall";

export const metadata: Metadata = {
    title: "Gurwi – Full Stack Developer & Modder",
    description: "I’m a full stack developer from Italy building accessible, pixel-perfect websites and custom game mods.",
    icons: "/favicon.ico",
    openGraph: {
        title: "Gurwi Portfolio – Projects & Creations",
        description:
            "Explore my latest projects, web applications, and custom Minecraft mods.",
        url: "https://gurwi.me",
        images: [
            {
                url: "https://gurwi.me/og.png",
                width: 1200,
                height: 630
            },
        ],
        siteName: "Gurwi Portfolio",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gurwi – Full Stack Developer & Modder",
        description: "Check out my projects, web apps, and custom Minecraft mods.",
        images: ["https://gurwi.me/og.png"]
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} ${homemadeApple.variable} ${greatVibes.variable} antialiased`}>
                <ReactLenis root>
                    <ThemeProvider defaultTheme="dark">
                        {isChristmas() && <SnowfallWrapper />}
                        {children}
                    </ThemeProvider>
                </ReactLenis>
            </body>
        </html>
    );
}
