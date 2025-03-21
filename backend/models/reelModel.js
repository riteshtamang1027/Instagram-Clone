import mongoose from "mongoose";

const reelSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  profilePicture: { type: String, riquired: true },
  userName:{ type: String, riquired: true },
  video:{type:String,required:true},
  likeCount:{type:Number,required:true,default:0},
  comments:[
    {
        commentMessage:{type:String, required:true,default:0}
    },
  ]
});

export const Reel = mongoose.model("Reel", reelSchema);
