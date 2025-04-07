const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
  dueDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
