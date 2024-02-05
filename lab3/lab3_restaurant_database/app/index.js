const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('../routes/RestaurantRouter')

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
const DB_HOST = "cluster0.47h8pph.mongodb.net"
const DB_PASSWORD = "0CKuUW52umZt0K5Z"
const DB_USER =  "101007500"
const DB_NAME = "w2024_comp3133_fri"
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_CONNECTION_STRING, {}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(restaurantRouter);

app.listen(8081, () => { console.log('Server is running...') });
