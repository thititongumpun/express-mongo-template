import mongoose, {model} from "mongoose";
// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
export const TodoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

export const Todo = model("todoModel", TodoSchema);
// create and export model
// module.exports = mongoose.model("todoModel", TodoSchema);