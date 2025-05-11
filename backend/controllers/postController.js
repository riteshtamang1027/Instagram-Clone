import  {Post}  from "../models/postModel.js";
import cloudinary from "../lib/cloudinaryConfig.js";

export const creatPost = async (req, res) => {
  try {
    const {postPicture,profilePicture} = req.files;
    const cloudinaryResponse1 = await cloudinary.uploader.upload(postPicture[0].path);
    const cloudinaryResponse2= await cloudinary.uploader.upload(profilePicture[0].path);


    const newCreatePost = await new Post({
      ...req.body,
      postPicture: cloudinaryResponse1.secure_url,
      profilePicture: cloudinaryResponse2.secure_url,
    }).save();
    return res.status(201).json({
      message: "newPost Create successfully.",
      post: newCreatePost,
    });
  } catch (error) {
    console.log(error )
    return res.status(500).json({
      message: "Somethin went wrong.",
      error,
    });
  }
};
export const getAllPost = async (req, res) => {
  try {
    const Postes = await Post.find().sort({createdAt:-1});
    return res.status(200).json({
      message: "All stories fetch successfully",
      data: Postes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went wrong.",
    });
  }
};
export const getPostById = async (req, res) => {
  try {
    const getpost = await Post.findById(req.params.id);
    return res.status(200).json({
      message: "post fetch successfully.",
      post: getpost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};
export const updatePostById =async (req ,res)=>{
    try {
        const updatedPost= await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).json({
            message:"successfully updated.",
            post:updatedPost,
            updatedTime:new Date().getTime(), 
        })
        
    } catch (error) {
      return res.status(500).json({
        message:"Internal server error."
      })
        
    }
}
export const deletePostById = async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    if(!deletePost){
      return res.status(404).json({
        message:"Post not found."
      })
    }
    return res.status(200).json({
      message: "successfully deleted",
      post: deletePost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
