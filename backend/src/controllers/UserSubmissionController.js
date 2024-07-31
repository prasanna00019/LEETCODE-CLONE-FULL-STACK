import UserSubmission from "../models/UserSubmissionModel.js";
export const submitCode=async(req,res)=>{
    try {
        const {userId,problemId,code,language,result,submissionTime}=req.body;
        const newSubmission=new UserSubmission({
            userId,problemId,code,language,result,submissionTime,
        })
        if(newSubmission){
            await newSubmission.save();
            res.status(201).json({
                _id:newSubmission._id,
                userId:newSubmission.userId,
                problemId: newSubmission.problemId,
                code: newSubmission.code,
                language:newSubmission.language,
                result:newSubmission.result,
                submissionTime:newSubmission.submissionTime,   

            })
        }
        else{
            res.status(400).json({error:"INVALID PROBLEM DATA"});
        }
    } catch (error) {
        
    }
}
export const getSubmission=async(req,res)=>{
    try {
        const {userId,probId}=req.params;
        const submissions=await UserSubmission.find({
            userId:userId,
            problemId:probId,
        }).exec();
        // console.log(submissions);
        res.status(201).json(submissions)
    } catch (error) {
      console.log("error in getting submissions",error.message);   
    }
}
