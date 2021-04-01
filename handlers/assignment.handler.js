const express = require("express");
const moment = require("moment");
const Assignment = require('../models/assignment.model.js')

const createAssignment = async(req,res)=>{
    try{
    console.log(req.body)
    req.body.expireAt =new Date(moment().add(req.body.duration,"minutes"))
    const obj = await Assignment.create(req.body)
    console.log("task created");
    res.send(obj)
  }
    catch(e){
        console.log(e)
    }
}

const listAssignment = async (req, res) => {
    try{
        const assignments = await Assignment.find()
        res.send(assignments)

    }catch(e){
        console.log(e)
    }
};


module.exports = {
  createAssignment,
  listAssignment
}
