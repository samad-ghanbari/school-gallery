import { FooterSectionProps } from "@/src/layout/footer/";
//import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
	about: {
		description: "Students Artistic Photo",
		socialLinks: [],
	},
	columnOne: {
		title: "Photography",
		links: [
			{
				label: "School Yard",
				href: "/",
				openNewTab: false,
			},
			{
				label: "School Field",
				href: "/",
				openNewTab: false,
			},
		],
	},
	columnTwo: {
		title: "",
		links: [
			{
				label: "School Library",
				href: "/",
				openNewTab: false,
			},
			{
				label: "Studying Time",
				href: "/",
				openNewTab: false,
			},
		],
	},
	columnThree: {
		title: "Address",
		location: "Dubai",
		mails: ["info@gallery.ir"],
		phoneNumbers: ["+971-"],
	},

	footerBottom: {
		copyrightText: "© SchoolGallery  2025 | All Rights Reserved",
		links: [],
	},
};
