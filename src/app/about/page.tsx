import React from "react";

export default async function CustomPage(data: {
	searchParams: PromiseLike<{ title: string; content: string }>;
}) {
	const { title, content } = await data.searchParams;

	return (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}

//export default CustomPage;
