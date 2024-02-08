const mongoose = require('mongoose')
const user = require("./UserModel")

const PrivateMessageSchema = new mongoose.Schema({
  from_user: {
    type: user,
    required: true
  },
  to_user: {
    type: user,
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

const PrivateMessage = mongoose.model("User", PrivateMessageSchema)
module.exports = PrivateMessage
