import express from "express";
import {
  creatReel,
  deleteRellById,
  getAllRell,
  getRellById,
} from "../controllers/rellController.js";
const router = express.Router();
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
  { name: "video", maxCount: 1 }, 
  { name: "profilePicture", maxCount: 1 }, 
]);

router.post("/",upload,creatReel);
router.get("/", getAllRell);
router.get("/:id", getRellById);
router.delete("/:id", deleteRellById);

export default router;
