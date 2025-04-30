import { Gabarito, Homemade_Apple, Poiret_One } from "next/font/google";

export const homemadeApple = Homemade_Apple({
	subsets: ["latin"],
	variable: "--font-homemade-apple",
	display: "swap",
	weight: "400"
});
  
export const gabarito = Gabarito({
	subsets: ["latin"],
	variable: "--font-gabarito",
	display: "swap"
});
  
export const poiretOne = Poiret_One({
	subsets: ["latin"],
	variable: "--font-poiret-one",
	display: "swap",
	weight: "400"
});