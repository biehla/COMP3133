const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    match: [
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
      "Must contain 2 capital letters, one special character, two digits, \
      three lowercase letters and at least 8 characters long"
    ],
    required: true
  },
  creation: {
    type: Date,
    default: Date.now()
  }
})

const User = mongoose.model("User", UserSchema)
module.exports = User
