import type { Metadata } from "next";
import { AOSInit } from "@/src/utils/aos";
import { cn } from "@/src/utils/shadcn";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/src/components/theme-provider";
import { ScrollToTopButton } from "@/src/components/scroll-to-top";

import { yekan, calibri } from "@/public/fonts";

import "./globals.css";

export const metadata: Metadata = {
	title: "School Gallery",
	description: "Students photo at school",
	keywords: "School, gallery, students photo, photo, art",
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(
				"light",
				yekan.variable,
				calibri.variable,
				"text-base leading-[1.875] text-accent-800 [&.dark]:text-body"
			)}>
			<AOSInit />
			<body style={{ direction: "ltr" }}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<div
						className={cn(
							"bg-white text-accent-800 dark:bg-accent-900 dark:text-body"
						)}>
						<main>{children}</main>
						{/* <ModeToggle /> */}
					</div>
				</ThemeProvider>
				<Toaster
					richColors
					position="top-right"
					closeButton
					visibleToasts={9}
				/>
				<ScrollToTopButton />
			</body>
		</html>
	);
}
