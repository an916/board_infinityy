const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path')
mongoose.connect('mongodb+srv://anuj:anuj@cluster0.5vava.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(require('./routes/assignment.route'))


app.listen(5000,function(){
  console.log("server running on port 5000.");
});
