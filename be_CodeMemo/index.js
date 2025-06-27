import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";
import { Routes } from "./src/routes/index.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

const uri = `${process.env.MONGODB_URI}${process.env.MONGODB_DB}`;
connectDB(uri);
Routes(app);

export const viteNodeApp = app;
