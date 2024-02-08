const express = require('express')
const mongoose = require('mongoose')
const { createServer } = require("http");
const { Server } = require("socket.io");

const SignUp = require('./routes/SignUp')

const SERVER_PORT = process.env.SERVER_PORT || 8080

const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(express.static('views'))
app.use(SignUp)

//TODO - Replace you Connection String here
const DB_HOST = "cluster0.47h8pph.mongodb.net"
const DB_PASSWORD = "0CKuUW52umZt0K5Z"
const DB_USER = "101007500"
const DB_NAME = "101007500_lab_test1_chat_app"
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_CONNECTION_STRING, {}).then(() => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(`Error Mongodb connection: ${err}`)
});


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(SERVER_PORT);
