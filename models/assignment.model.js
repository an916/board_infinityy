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
    expireAt: {
      type: Date,
      index: {expireAfterSeconds: 0}
    }
  },
  { timestamps: true }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);
Assignment.ensureIndexes(function(err){
});

module.exports = Assignment
