// base controller

//import { Request, Response } from "express";

export function getHome(req, res) {
	console.log("controller called");
	res.json({ name: "samad", lastname: "ghanbari" });
}
