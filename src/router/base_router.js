import { Router } from "express";
import * as controller from "../controller/base_controller.js";

const router = Router();

router.get("/home", (req, res) => {
	console.log("fetch____________________");
	controller.getHome(req, res);
});

export default router;
