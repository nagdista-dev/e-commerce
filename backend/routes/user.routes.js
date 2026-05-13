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

const userRouter = express.Router();

// !GET
userRouter.get("/", getUsers);
userRouter.get("/profile", getUserProfile);
userRouter.get("/:id", getUserById);
// !POST
userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
// !PUT
userRouter.put("/profile", updateUserProfile);
userRouter.put("/:id", updateUserByAdmin);
// !DELETE
userRouter.delete("/:id", deleteUser);
export default userRouter;
