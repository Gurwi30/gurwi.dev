import type { Metadata } from "next";
import {
    Inter,
    Playfair_Display,
    Homemade_Apple,
    Great_Vibes,
} from "next/font/google";
import { ReactLenis } from "@/utils/lenis";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

// Playfair Display
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

// Homemade Apple
const homemadeApple = Homemade_Apple({
    subsets: ["latin"],
    variable: "--font-homemade-apple",
    display: "swap",
    weight: ["400"]
});

// Great Vibes
const greatVibes = Great_Vibes({
    subsets: ["latin"],
    variable: "--font-great-vibes",
    display: "swap",
    weight: ["400"]
});

export const metadata: Metadata = {
    title: "Gurwi Portfolio",
    description: "@Gurwi30 Portfolio",
    icons: "/favicon.ico",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} ${homemadeApple.variable} ${greatVibes.variable} antialiased`}
            >
                <ReactLenis root>
                    <ThemeProvider defaultTheme="dark">
                        {children}
                    </ThemeProvider>
                </ReactLenis>
            </body>
        </html>
    );
}
