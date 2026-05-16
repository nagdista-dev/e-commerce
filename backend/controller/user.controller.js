import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/User.js";
import generateToken from "../utils/generateToken.js";
// !LOGIN
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email Or Password");
  }
});
// !REGISTER
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
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
  const { _id: userId } = req.user;
  const user = await User.findById(userId);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
// !UPDATE USER PROFILE
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const body = req.body || {};

  user.name = body.name || user.name;
  user.email = body.email || user.email;

  if (body.password) {
    user.password = body.password;
  }

  const updatedUser = await user.save();

  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
  });
});
// !UPDATE USER PROFILE BY ADMIN
export const updateUserByAdmin = asyncHandler(async (req, res, next) => {
  res.send("update Profile");
});
