import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import { clientURL } from "./constants/env.js";

const app = express();

app.use(cors({ origin: clientURL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Server is running at 8800");
});

// console-ninja node --watch app.js
