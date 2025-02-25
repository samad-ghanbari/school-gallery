import { HeaderProps } from "@/src/layout/header/desktop";

export const menuItemsProps: HeaderProps["menuItems"] = [
	{
		label: "خانه",
		href: "/",
	},

	{
		title: "خدمات",
		subMenuItems: [
			{
				label: "مشاوره طراحی شبکه",
				href: "/soon",
			},
			{
				label: "ارائه راهکار  شبکه",
				href: "/soon",
			},
		],
	},

	{
		title: "محصولات",
		subMenuItems: [
			{
				label: "روتر-سوییچ سیسکو",
				href: "/soon",
			},
			{
				label: "روتر-سوییچ هواوی",
				href: "/soon",
			},
			{
				label: "روترهای میکروتیک",
				href: "/soon",
			},
			{
				label: "مودم های ADSL",
				href: "/soon",
			},
			{
				label: "مودم های ONT",
				href: "/soon",
			},
		],
	},

	{
		title: "آموزش",
		subMenuItems: [
			{
				label: "مبانی شبکه",
				href: "/soon",
			},
			{
				label: "CCNA Cisco",
				href: "/soon",
			},
			{
				label: "CCNP Cisco",
				href: "/soon",
			},
			{
				label: "CCIE Cisco",
				href: "/soon",
			},
			{
				label: "MTCNA Mikrotik",
				href: "/soon",
			},
			{
				label: "HCNA Huawei",
				href: "/soon",
			},
			{
				label: "HCNP Huawei",
				href: "/soon",
			},
		],
	},

	{
		label: "درباره ما",
		href: "/about",
	},

	{
		label: "تماس با ما",
		href: "/contact",
	},
];
