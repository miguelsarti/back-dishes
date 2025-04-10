import express from "express";
import pratosController from "../controllers/pratosController.js";
const router = express.Router();
router.get("/", pratosController.getAll);
router.get("/:id", pratosController.getDishById)
router.post("/", pratosController.create);
router.put("/:id", pratosController.update);
router.delete("/:id", pratosController.delete);
export default router;
