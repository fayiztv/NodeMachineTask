import express from "express";
import dbConnect from "./database/connection.js"



dbConnect();
const app = express();
app.use(express.json());



app.listen(3000, () => console.log(`Server running on port 300`));



console.log("this is from server");
