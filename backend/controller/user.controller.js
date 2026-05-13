import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
// !LOGIN
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000 * 30,
    });
    res.json({ _id: user._id, email: user.email, isAdmin: user.isAdmin });
  } else {
    res.status(401);
    throw new Error("Invalid Email Or Password");
  }
});
// !REGISTER
export const registerUser = asyncHandler(async (req, res, next) => {
  res.send("register User");
});
// !LOGOUT
export const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
});
// !GET USER BY ID
export const getUserById = asyncHandler(async (req, res, next) => {
  res.send("all Users");
});
// !GET ALL USERS
export const getUsers = asyncHandler(async (req, res, next) => {
  res.send("all Users");
});
// !DELETE  USER
export const deleteUser = asyncHandler(async (req, res, next) => {
  res.send("all Users");
});
// !GET USER PROFILE
export const getUserProfile = asyncHandler(async (req, res, next) => {
  res.send("User Profile");
});
// !UPDATE USER PROFILE
export const updateUserProfile = asyncHandler(async (req, res, next) => {
  res.send("update Profile");
});
// !UPDATE USER PROFILE BY ADMIN
export const updateUserByAdmin = asyncHandler(async (req, res, next) => {
  res.send("update Profile");
});
