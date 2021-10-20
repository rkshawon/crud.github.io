const express = require("express")
const mongoose = require("mongoose")
const storeRoute = require("./routers/router")


mongoose.connect("mongodb://localhost/Crud", { useFindAndModify: false, useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection
const app = express()
app.set("view engine", "ejs")

db.on("open", ()=>{
    console.log("Database is connected")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/", storeRoute)


app.listen(3000, ()=>{
    console.log("Server is connected")
})