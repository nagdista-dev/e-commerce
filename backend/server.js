import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.routes.js";
import { errorHandler, notFound } from "./middleware/error.middleware.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
// !CONNECT DATABASE
await connectDB();
// !VARIABLES
const app = express();
const port = process.env.PORT || 3001;
// !MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"] }));
// !ROUTES
//  *TEST ROUTE
app.get("/", (_, res) => {
  res.json({ message: "E-COMMERCE API IS RUNNING" });
});
// *PRODUCT ROUTER
app.use("/api/products", productRouter);
// *USERS
app.use("/api/users", userRouter);
// !ME MIDDLEWARES
app.use(notFound);
app.use(errorHandler);
// !LISTEN
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${port}`);
});
