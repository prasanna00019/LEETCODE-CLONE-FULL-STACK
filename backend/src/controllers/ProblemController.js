import Problem from "../models/ProblemModel.js";
export const addProblem=async(req,res)=>{
   try {
    const {problem_name,problem_desc,problem_examples,constraints,category,tags,solution_skeleton,hints,testcases}=req.body;
    const name=await Problem.findOne({problem_name})
    if(name){ 
        return res.status(400).json({error:"problem already exists"})
    }      
    const newProblem=new Problem({problem_name,problem_desc,problem_examples,constraints,category,tags,solution_skeleton,hints,testcases});
    if(newProblem){
        await newProblem.save();
        res.status(201).json({
            _id:newProblem._id,
            problem_name:newProblem.problem_name,
            problem_desc:newProblem.problem_desc,
            problem_examples:newProblem.problem_examples,
            constraints:newProblem.constraints,
            category:newProblem.category,
            tags:newProblem.tags,
            solution_skeleton:newProblem.solution_skeleton,
            hints:newProblem.hints,
            testcases:newProblem.testcases
        })
    }
    else{
        res.status(400).json({error:"INVALID PROBLEM DATA"})
    }
    // res.status(201).json({message:"problem added successfully"});
   } catch (error) {
    console.log("error in PROBLEM CONTROLLER",error.message)
    res.status(500).json({ error:error.message} )
   }
}
export const getProblems = async (req, res) => {
    try {
      const problems = await Problem.find();
      res.status(200).json(problems);
    } catch (error) {
      console.log("error in retrieving problems", error.message);
      res.status(500).json({ error: error.message });
    }
  };
  export const getProblemById = async (req, res) => {
    try {
      const { id } = req.params;
      const problem = await Problem.findById(id);
      if (!problem) {
        return res.status(404).json({ error: "Problem not found" });
      }
      res.status(200).json(problem);
    } catch (error) {
      console.log("error in retrieving problem by ID", error.message);
      res.status(500).json({ error: error.message });
    }
  };  