const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ctf');
mongoose.connect('mongodb+srv://cipherGUYS:ALlkuhC1lOzV7WX9@cluster0.kmqap.mongodb.net/?retryWrites=true&w=majority');
// mongodb+srv://cipherGUYS:<password>@cluster0.kmqap.mongodb.net/?retryWrites=true&w=majority
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

module.exports = db;

// ALlkuhC1lOzV7WX9