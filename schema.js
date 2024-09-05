import mongoose from "mongoose"

const Questions = new mongoose.Schema({
    Question : {type:String},
    Option1 : {type:Number},
    Option2 : {type:Number},
    Option3 : {type:Number},
    Option4 : {type:Number},
    Option5 : {type:Number},
    key : {type:Number}
})

const QuestionsSchema = mongoose.model("List of Questions", Questions)
export default QuestionsSchema