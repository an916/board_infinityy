const express = require("express");
const Assignment = require('../models/assignment.model.js')

const getAssignment = async(req,res)=>{
    try{
    console.log(req.body)
    const obj = await Assignment.create(req.body)
    console.log("task craeted");
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
  getAssignment,
  listAssignment
}
