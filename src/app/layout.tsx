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

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

const homemadeApple = Homemade_Apple({
    subsets: ["latin"],
    variable: "--font-homemade-apple",
    display: "swap",
    weight: ["400"],
});

const greatVibes = Great_Vibes({
    subsets: ["latin"],
    variable: "--font-great-vibes",
    display: "swap",
    weight: ["400"],
});

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
