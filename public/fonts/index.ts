import localFont from "next/font/local";

export const yekan = localFont({
	src: [
		{
			path: "yekan.ttf",
			weight: "400",
		},
	],
	variable: "--font-yekan",
});

export const calibri = localFont({
	src: [
		{
			path: "calibri.ttf",
			weight: "400",
		},
	],
	variable: "--font-calibri",
});
