const mongoose = require("mongoose");

//creating schema
const todoSchema = new mongoose.Schema({
  todo_description: {
    type: String
  },
  todo_responsible: {
    type: String
  },
  todo_priority: {
    type: String
  },
  todo_completed: {
    type: Boolean
  }
});

//exporting and creating model based on schema
module.exports = mongoose.model("TodoList", todoSchema);
