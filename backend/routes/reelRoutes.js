import express from "express";
import {
  creatReel,
  deleteRellById,
  getAllRell,
  getRellById,
} from "../controllers/rellController.js";
const router = express.Router();

router.post("/", creatReel);
router.get("/", getAllRell);
router.get("/:id", getRellById);
router.delete("/:id", deleteRellById);

export default router;
