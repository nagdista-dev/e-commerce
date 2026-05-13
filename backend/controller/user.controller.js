import asyncHandler from "../middleware/asyncHandler";
// !LOGIN
export const loginUser = asyncHandler(async (req, res, next) => {
  res.send("Auth User");
});
// !REGISTER
export const registerUser = asyncHandler(async (req, res, next) => {
  res.send("register User");
});
// !LOGOUT
export const logoutUser = asyncHandler(async (req, res, next) => {
  res.send("logout User");
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
