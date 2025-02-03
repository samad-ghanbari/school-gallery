// const express = require("express");
// const next = require("next");

import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Custom API route
	server.get("/api", (req, res) => {
		res.json({ message: "Hello from Express!" });
	});

	// Custom route for a page
	// render next page
	server.get("/about", (req, res) => {
		const data = {
			title: "Custom Page",
			content: "This is a custom page rendered with Express",
		};
		app.render(req, res, "/about", data);
	});

	// using API based
	server.get("/api/data", (req, res) => {
		const data = {
			title: "Application",
			content: "Samad Ghanbari",
		};
		res.json(data);
	});

	// Handle all other routes with Next.js
	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, (err) => {
		if (err) throw err;
		console.log("> Ready on http://localhost:3000");
	});
});
