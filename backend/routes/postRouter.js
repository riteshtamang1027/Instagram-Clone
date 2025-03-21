import express from 'express';
import { creatPost, deletePostById, getAllPost, getPostById, updatePostById } from '../controllers/postController.js';
const router= express.Router();
import multer from 'multer';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, "uploads/"); // Folder where files are temporarily stored
  },
  
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "postPicture", maxCount: 1 }, 
  { name: "profilePicture", maxCount: 1 }, 
]);


router.post("/",upload,creatPost);
router.get("/",getAllPost);
router.get("/:id",getPostById);
router.patch("/:id",updatePostById);
router.delete("/:id",deletePostById);

export default router;
