const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    department: String, enum: ["IT", "Management", "HR"],
    position: String, enum: ["entry-level", "middle management", "executive"]
})

const User = mongoose.model('User', userSchema) 

module.exports = User;