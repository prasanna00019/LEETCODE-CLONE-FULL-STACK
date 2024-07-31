import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true ,minlength:8}, // hashed passwords
  username: { type: String, required: true,unique:true },
  profilePic:{
    type:String,
    default:""},
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;