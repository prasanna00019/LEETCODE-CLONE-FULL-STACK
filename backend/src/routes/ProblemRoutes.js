import express from "express"
import { addProblem, getProblemById, getProblems } from "../controllers/ProblemController.js";
const ProblemRouter=express.Router();
ProblemRouter.post('/add',addProblem);
ProblemRouter.get('/',getProblems);
ProblemRouter.get('/:id',getProblemById);
export default ProblemRouter;