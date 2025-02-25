import { FooterSectionProps } from "@/src/layout/footer/";
//import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
	about: {
		description:
			"ارائه دهنده راهکارهای شبکه و سیستم‌های مخابراتی و تامین تجهیزات",
		socialLinks: [],
	},
	columnOne: {
		title: "مشاوره در طراحی شبکه",
		links: [
			{
				label: "مشاوره و طراحی شبکه‌های سرویس پروایدر",
				href: "/",
				openNewTab: false,
			},
			{
				label: "مشاوره و طراحی شبکه‌های سازمانی",
				href: "/",
				openNewTab: false,
			},
			{
				label: "مشاوره در خرید تجهیزات شبکه",
				href: "/",
				openNewTab: false,
			},
			{
				label: "مشاوره در ارائه راهکارهای FTTH",
				href: "/",
				openNewTab: false,
			},
			{
				label: "مشاوره در راه‌اندازی سامانه‌های سازمانی",
				href: "/",
				openNewTab: false,
			},
		],
	},
	columnTwo: {
		title: "تامین تجهیزات و آموزش",
		links: [
			{
				label: "تامین تجهیزات سیستم‌های مخابراتی",
				href: "/",
				openNewTab: false,
			},
			{
				label: "تامین تجهیزات شبکه",
				href: "/",
				openNewTab: false,
			},
			{
				label: "آموزش راه‌اندازی سرویس‌های شبکه",
				href: "/",
				openNewTab: false,
			},
			{
				label: "آموزش راه‌اندازی FTTH",
				href: "/",
				openNewTab: false,
			},
		],
	},
	columnThree: {
		title: "آدرس",
		location: "تهران، میدان ونک خیابان ملاصدرا",
		mails: ["info@gallery.ir"],
		phoneNumbers: ["021-88...", "021-88..."],
	},

	footerBottom: {
		copyrightText: "© SchoolGallery  2024 | All Rights Reserved",
		links: [],
	},
};
