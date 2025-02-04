import React from "react";

async function getData() {
	const res = await fetch("http://localhost:3000/api/about");
	const result = await res.json();
	return result;
}

export default async function CustomPage() {
	//const { title, content } = await data.searchParams;

	const data: { title: string; content: string } = await getData();
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.content}</p>
		</div>
	);
}

//export default CustomPage;
