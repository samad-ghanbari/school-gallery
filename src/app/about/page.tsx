import React from "react";

async function getData1() {
	const res = await fetch("http://localhost:3000/api/about");
	const result = await res.json();
	return result;
}

export default async function AboutPage() {
	const data: { title: string; content: string } = await getData1();
	return (
		<>
			<h1>{data.title}</h1>
			<p>{data.content}</p>
		</>
	);
}
