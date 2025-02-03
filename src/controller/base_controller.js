// base controller

//import { Request, Response } from "express";

export function getHome(req, res) {
	res.json({ name: "samad", lastname: "ghanbari" });
}
