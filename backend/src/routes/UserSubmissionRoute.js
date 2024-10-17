import express from "express"
import { getAllOfParticularUser, getSubmission, submitCode } from "../controllers/UserSubmissionController.js";
const UserSubmissionRouter=express.Router();
UserSubmissionRouter.post('/',submitCode);
UserSubmissionRouter.get('/:userId/:probId',getSubmission);
UserSubmissionRouter.get('/:userId',getAllOfParticularUser);
export default UserSubmissionRouter;
