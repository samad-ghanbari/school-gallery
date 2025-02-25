import { HeaderProps } from "@/src/layout/header/desktop";

export const menuItemsProps: HeaderProps["menuItems"] = [
	{
		label: "Home",
		href: "/",
	},

	{
		title: "Gallery",
		subMenuItems: [
			{
				label: "Sample Photo",
				href: "/soon",
			},
		],
	},

	{
		title: "learning",
		subMenuItems: [
			{
				label: "Landscape/Portrait",
				href: "/soon",
			},
			{
				label: "Macro/Abstract",
				href: "/soon",
			},
			{
				label: "Experts Subjects",
				href: "/soon",
			},
		],
	},

	{
		label: "About Us",
		href: "/about",
	},

	{
		label: "Contact Us",
		href: "/contact",
	},
];
