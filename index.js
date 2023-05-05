import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from "./routes/users.js"
import { recipesRouter } from "./routes/recipes.js";
const app=express();

app.use(express.json());
app.use(cors());
app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);
mongoose.connect("mongodb+srv://vikesh667kumar:Mernstack321@recipes.rlhjivd.mongodb.net/recipes",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.listen(5001,()=>console.log("server started"))