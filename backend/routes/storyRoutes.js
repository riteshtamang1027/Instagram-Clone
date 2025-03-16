import express from 'express';
import { creatStory, deleteStoryById, getAllStory, getStoryById } from '../controllers/storyController.js';
const router= express.Router();

router.post("/",creatStory);
router.get("/",getAllStory);
router.get("/:id",getStoryById);
router.delete("/:id",deleteStoryById);

export default router;
