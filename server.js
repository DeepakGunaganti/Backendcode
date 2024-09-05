import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import QuestionsRoute from "./Routes/Questionsroutes.js"
import bodyParser from "body-parser"
const app = express()
app.use(cors())
dotenv.config()
app.use(bodyParser.json())
app.use("/api", QuestionsRoute)


app.listen(5000, (req,res)=>{
    console.log("Iam listening at port 5000")
})

const connectionstring = async ()=>{
    try{
       await mongoose.connect(process.env.Connectstring)
       console.log("successfully connected to DB")
    } catch (err){
      console.log("Error while connecting to DB", err)
    }
}
connectionstring()