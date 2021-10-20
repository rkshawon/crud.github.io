const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    age:{
        type: String
    },
    address:{
        type: String
    }
})
const userModel = mongoose.model("userInfo", userSchema)

module.exports = userModel