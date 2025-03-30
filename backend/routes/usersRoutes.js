import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  LoginUser,
  RegisterUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();
import multer from 'multer';
// import { verifyToken } from "../middlewares/verifyToken.js";
const upload = multer({ dest: 'uploads/' });

router.post("/register",upload.single("profilePicture"),RegisterUser);
router.post("/login", upload.single("profilePicture"),LoginUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id",upload.single("profilePicture"), updateUser);
router.delete("/:id", deleteUser); 

export default router;
