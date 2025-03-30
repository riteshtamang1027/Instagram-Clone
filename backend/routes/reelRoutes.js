import express from "express";
import {
  creatReel,
  deleteRellById,
  getAllRell,
  getRellById,
} from "../controllers/rellController.js";
const router = express.Router();
import multer from 'multer';
import { verifyToken } from "../middlewares/verifyToken.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, "uploads/"); // Folder where files are temporarily stored
  },
  
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "video", maxCount: 1 }, 
  { name: "profilePicture", maxCount: 1 }, 
]);

router.post("/",verifyToken,upload,creatReel);
router.get("/",verifyToken, getAllRell);
router.get("/:id",verifyToken, getRellById);
router.delete("/:id",verifyToken, deleteRellById); 

export default router;
