"use client";

import React, { useEffect, useState } from "react";

export default function About2Page() {
	const [data, setData] = useState(null);

	async function fetchData() {
		const res = await fetch("http://localhost:3000/api/home");
		const result = await res.json();
		console.log(result);
		setData(result);
	}

	useEffect(() => {
		fetchData();
	});

	if (!data) {
		return <div>Loading...</div>;
	}

	const { name, lastname } = data;

	return (
		<div>
			<h1>{name}</h1>
			<p>{lastname}</p>
		</div>
	);
}
