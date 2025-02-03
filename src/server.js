// const express = require("express");
// const next = require("next");

import express from "express";
import next from "next";
//import router from "./router/base_router.js";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	//server.use("/api", router);

	//const router = express.Router();

	server.all("/api/home", (req, res) => {
		console.log("fetch");
		res.json({ name: "samad" });
	});

	// Handle with Next.js
	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, (err) => {
		if (err) throw err;
		console.log("> Ready on http://localhost:3000");
	});
});
