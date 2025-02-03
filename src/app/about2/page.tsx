"use client";

import React, { useEffect, useState } from "react";

export default function About2Page() {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/api/data");
			const result = await res.json();
			setData(result);
		}
		fetchData();
	}, []);

	if (!data) {
		return <div>Loading...</div>;
	}

	const { title, content } = data;

	return (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}
