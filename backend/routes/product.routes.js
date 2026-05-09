import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/Product.js";
import {
  getProductById,
  getProducts,
} from "../controller/product.controller.js";

const productRouter = express.Router();

// !PRODUCTS
productRouter.get("/", getProducts);
// !SINGLE PRODUCT
// ! SINGLE PRODUCT
productRouter.get("/:id", getProductById);

export default productRouter;
