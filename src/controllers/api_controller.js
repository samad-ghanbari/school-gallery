// api controller

//import { Request, Response } from "express";

export function getHome(req, res) {
	res.json({ name: "samad", lastname: "ghanbari" });
}

export function getAbout(req, res) {
	res.json({ title: "samad - 01", content: "ghanbari - 01" });
}
