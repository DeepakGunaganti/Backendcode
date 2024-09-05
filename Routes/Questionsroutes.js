import express from "express"
import data from "../data.js"
import QuestionsSchema from "../schema.js"

const QuestionsRoute = express.Router()

QuestionsRoute.post("/postData", async (req,res) => {
    const details = await QuestionsSchema.insertMany(data)
    res.send({message:"Data posted succesfully" , details, status:200})
})

QuestionsRoute.get("/getData", async (req,res) => {
    const details = await QuestionsSchema.find()
    res.send({message:"Data received succesfully" , details, status:200})
})

export default QuestionsRoute;