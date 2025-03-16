import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  postPicture: { type: String, riquired: true },
  likeCount:{type:Number,required:true,default:0},
  comments:[
    {
        commentMessage:{type:String, required:true,default:0}
    },
  ]
});

export const Post = mongoose.model("Post", PostSchema);
