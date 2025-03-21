import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  caption: { type: String, required: true },
  postPicture: { type: String, riquired: true },
  likeCount: { type: Number, required: true, default: 0 },
  createdAt: { type: Number, default:()=> new Date().getHours() },
  comments: [
    {
      commentMessage: { type: String, required: true, default: 0 },
    },
  ],
});

export const Post = mongoose.model("Post", PostSchema);
