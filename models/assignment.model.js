const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
    },
    taskDescription: {
      type: String,
    },
    creator: {
      type: String,
    },
    duration: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment
