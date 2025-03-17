import express from 'express';
import { creatPost, deletePostById, getAllPost, getPostById, updatePostById } from '../controllers/postController.js';
const router= express.Router();

router.post("/",creatPost);
router.get("/",getAllPost);
router.get("/:id",getPostById);
router.patch("/:id",updatePostById);
router.delete("/:id",deletePostById);

export default router;
