import express from "express";
import products from "./data/products.js";
import "dotenv/config";
import cors from "cors";
// !CONNECT DATABASE

// !VARIABLES
const app = express();
const port = process.env.PORT || 3001;
// !MIDDLEWARE
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));
// !ROUTES
//  *TEST ROUTE
app.get("/", (_, res) => {
  res.json({ message: "E-COMMERCE API IS RUNNING" });
});
// *PRODUCTS
app.get("/api/products", (req, res) => {
  res.json(products);
});
// *SINGLE PRODUCT
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p._id === id);
  res.json(product);
});
// !LISTEN
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${port}`);
});
