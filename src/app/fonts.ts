import { Great_Vibes, Homemade_Apple, Inter, Playfair_Display } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const homemadeApple = Homemade_Apple({
    subsets: ["latin"],
    variable: "--font-homemade-apple",
    display: "swap",
    weight: ["400"],
});

export const greatVibes = Great_Vibes({
    subsets: ["latin"],
    variable: "--font-great-vibes",
    display: "swap",
    weight: ["400"],
});
