import mongoose from "mongoose";

const userSubmissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
  code: { type: String, required: true },
  language: { 
    type: String, 
    enum: ['javascript', 'python', 'java', 'c', 'cpp'], 
    required: true 
  },
  result: {
    status: { 
      type: String, 
      enum: ['success', 'failure', 'timeout', 'error'], 
      required: true 
    },
   
  },
  submissionTime: { type: Date, default: Date.now }
});

const UserSubmission = mongoose.model('UserSubmission', userSubmissionSchema);

export default UserSubmission;
