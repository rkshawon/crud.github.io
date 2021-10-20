const axios = require("axios")
const userModel = require("../models/model")
let alert = require('alert')

exports.homerouter = (req, res)=>{
    axios.get("http://localhost:3000/api/userinfo")
    .then((response)=>{
       res.render("index", {users: response.data}) 
    })
    .catch(err=>{
        res.send(err)
    })   
}

exports.postusernInfo =  (req, res)=>{
    const store = new userModel({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address
    })
    userModel.findOne({email: store.email }, function(err , data){
        if(err){console.log(err)}
        if(data == null)
        {
            store.save()
            .then(data=>{
                res.render("form")
            })
            .then(err=>console.log(err))
        }
        else{
            alert("Email Already Exits.Try Using Different Email")
            res.render("form")
        }

    })
}

exports.getuserInfo = (req, res)=>{
    userModel.find()
    .then((user)=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "error occured"} )
    })
}

exports.form = (req, res)=>{
    res.render("form")
}
exports.updateInfo = (req, res)=>{
    const id = req.body.id
    const updateData = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address
    }

    userModel.findByIdAndUpdate(id, {$set: updateData})
    .then(()=>{
        res.json({
            message:"done"
        })
    })
    .catch((err)=>{
        res.status(500).send({message: err.message || "error occured while fetching user informantion"})
    })
}
exports.update = (req, res)=>{
    let id = req.query.id
    userModel.findById(id)
    .then((user)=>{
        res.render("update", {user:user})
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "error occured"} )
    })
}

exports.destroy = (req, res)=>{
    const id = req.body.id
    userModel.findByIdAndRemove(id)
    .then(()=>{
        res.send({
            message: "Data was deleted successfully"
        })
    })
}

exports.search = (req, res)=>{
    const searchKey = req.query.searchId
     if(searchKey){
        userModel.findById(searchKey)
        .then((user)=>{
            res.render("search", {user: user})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    else {
        res.render("search", {user: null})
    }
}