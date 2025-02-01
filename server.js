const express = require("express");
const next = require("next");
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
	server.get("/about", (req, res) => {
		return app.render(req, res, "about/page.tsx");
	});

	// Handle all other routes with Next.js
	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(80, (err) => {
		if (err) throw err;
		console.log("> Ready on http://localhost:80");
	});
});
