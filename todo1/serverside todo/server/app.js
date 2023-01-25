import express from "express";

import userRouter from "./controllers/users/index.js";

//Instantiation
const app = express();
const port = 5001;

app.use(express.json()) //converting into json
// /http://192.168.68.77:5001

app.get("/", (req, res) => {
    res.send("The Server is Up");
})

app.use("/api/user",userRouter);

app.listen(port, () => {
    console.log("The Server is Running on Port : ", port)
})