import express from "express";
import next from "next";
import apiRouter from "./routers/api_router.js";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.use("/api", apiRouter);

	// Handle with Next.js
	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, (err) => {
		if (err) throw err;
		console.log("> Ready on http://localhost:3000");
	});
});
