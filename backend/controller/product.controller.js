import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/Product.js";

// @desc    Fetch all products
// @route   GET/api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch a Product
// @route   GET/api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({
      message: "Resource not found",
    });
  }

  return res.json(product);
});
