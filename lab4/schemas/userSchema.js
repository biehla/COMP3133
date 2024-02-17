const mongoose = require("mongoose")

// Regex from https://emailregex.com/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const cityRegex = /[\w\s]*/
// Regex from https://urlregex.com/
const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
const zipCodeRegex = /\d{5}\-\d{4}/
const phoneNumberRegex = /\d(-\d{3}){3}/

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 4
  },
  email: {
    type: String,
    required: true,
    match: emailRegex
  },
  city: {
    type: String,
    required: true,
    match: cityRegex
  },
  url: {
    type: String,
    required: true,
    match: urlRegex
  },
  zipCode: {
    type: String,
    required: true,
    match: zipCodeRegex
  },
  phoneNumber: {
    type: String,
    required: true,
    match: phoneNumberRegex
  }
})

const User = mongoose.model('User', user)
module.exports = User
