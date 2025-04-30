import type { Metadata } from "next";
import { Geist, Geist_Mono, Red_Hat_Text } from "next/font/google";
import { gabarito, homemadeApple, poiretOne } from "@/utils/fonts";
import { ReactLenis } from "@/utils/lenis";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

const redHat = Red_Hat_Text({
	subsets: ['latin'],
	variable: '--font-red-hat',
	display: "swap"
});

export const metadata: Metadata = {
	title: "Gurwi Portfolio",
	description: "@Gurwi30 Portfolio",
	icons: "/favicon.ico"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${redHat.variable} ${homemadeApple.variable} ${gabarito.variable} ${poiretOne.variable} antialiased`}>
				<ReactLenis root>
					{children}
				</ReactLenis>
			</body>
		</html>
	);
}
