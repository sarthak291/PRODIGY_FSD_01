const mongoose = require('mongoose');
const connect= mongoose.connect('mongodb://localhost:27017/Login_tut');

//check database connected or not
connect.then(()=>{
    console.log("Database connected successfully");
})
.catch((err) => {
  console.log(err);
});

//create a schema
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//create a model
const collection = new mongoose.model('users', loginSchema);

module.exports = collection;