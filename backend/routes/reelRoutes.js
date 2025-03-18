import express from "express";
import {
  creatReel,
  deleteRellById,
  getAllRell,
  getRellById,
} from "../controllers/rellController.js";
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

router.post("/",upload.single("video"),creatReel);
router.get("/", getAllRell);
router.get("/:id", getRellById);
router.delete("/:id", deleteRellById);

export default router;
