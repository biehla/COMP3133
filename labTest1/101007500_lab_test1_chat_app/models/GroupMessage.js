const mongoose = require('mongoose')
const userModel = require("./UserModel")

const GroupMessageSchema = new mongoose.Schema({
  from_user: {
    type: userModel,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date_sent: {
    type: Date,
    default: Date.now()
  }
})

const GroupMessage = mongoose.model("User", GroupMessageSchema)
module.exports = GroupMessage 
