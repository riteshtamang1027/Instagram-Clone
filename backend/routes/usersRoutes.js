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

router.post("/", RegisterUser);
router.post("/", LoginUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
