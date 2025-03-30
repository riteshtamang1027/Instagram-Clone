import express from "express";
import {
  creatStory,
  deleteStoryById,
  getAllStory,
  getStoryById,
} from "../controllers/storyController.js";
import multer from "multer";
import { verifyToken } from "../middlewares/verifyToken.js";
const upload = multer({ dest: "uploads/" });

const router = express.Router();
router.post("/",verifyToken, upload.single("storyPicture"), creatStory);
router.get("/",verifyToken, getAllStory);
router.get("/:id", getStoryById);
router.delete("/:id", deleteStoryById);

export default router;
