import { Router } from "express";
import * as controller from "../controller/base_controller.js";

const router = Router();

router.get("/api/home", (req, res) => {
	console.log("fetch");
	controller.getHome(req, res);
});

export default router;
