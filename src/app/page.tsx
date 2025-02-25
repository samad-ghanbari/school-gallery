import React from "react";

import { Footer } from "@/src/layout/footer/index";
import { MainHeader } from "@/src/layout/header/index";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "School gallery | Home",
};

export default function Home() {
	return (
		<>
			<MainHeader />
			<div className="w-full h-screen pt-20 bg-[#fffafa]">
				<h1> Home Page</h1>
			</div>
			<Footer />
		</>
	);
}
