import express from "express";
import {
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  loginUser,
  logoutUser,
  registerUser,
  updateUserByAdmin,
  updateUserProfile,
} from "../controller/user.controller.js";
import { admin, protect } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

// !GET
userRouter.get("/", protect, admin, getUsers); //
userRouter.get("/profile", protect, getUserProfile); //
userRouter.get("/:id", getUserById); //
// !POST
userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
// !PUT
userRouter.put("/profile", protect, updateUserProfile);
userRouter.put("/:id", protect, admin, updateUserByAdmin);
// !DELETE
userRouter.delete("/:id", protect, admin, deleteUser);
export default userRouter;
