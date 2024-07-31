import mongoose from "mongoose";

// Define the schema for test cases
const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true }
});

// Define the main schema for the problem model
const problemSchema = new mongoose.Schema({
  problem_name: { type: String, required: true },
  problem_desc: { type: String, required: true },
  problem_examples: { type: String, required: true },
  constraints: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['easy', 'medium', 'hard'], 
    required: true 
  },
  tags: [{ type: String }],
  solution_skeleton: {
    javascript: { type: String },
    python: { type: String },
    java: { type: String },
    c: { type: String },
    cpp:{type:String},
  },
  hints: [{ type: String }],

  testcases: {
    sample: {
      type: [testCaseSchema], // Array of sample test cases
      required: true
    },
    all_test_cases: {
      type: [testCaseSchema], // Array of all test cases
      required: true
    }
  }
});

// Create a model from the schema
const Problem = mongoose.model('Problem', problemSchema);

export default Problem;