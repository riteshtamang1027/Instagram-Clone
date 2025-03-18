import express from "express";
import {
  creatStory,
  deleteStoryById,
  getAllStory,
  getStoryById,
} from "../controllers/storyController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();
router.post("/", upload.single("storyPicture"), creatStory);
router.get("/", getAllStory);
router.get("/:id", getStoryById);
router.delete("/:id", deleteStoryById);

export default router;
