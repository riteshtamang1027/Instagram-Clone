import cloudinary from "../lib/cloudinaryConfig.js";
import { Reel } from "../models/reelModel.js";

export const creatReel = async (req, res) => {
  try {
    const {profilePicture,video} = req.files;
    const cloudinaryResponseprofilePicture = await cloudinary.uploader.upload(profilePicture[0].path);
    const cloudinaryResponseVideo = await cloudinary.uploader.upload(video[0].path);


    const newCreateRell = await new Reel({
      ...req.body,
      video: cloudinaryResponseVideo.secure_url,
      profilePicture: cloudinaryResponseprofilePicture.secure_url,

    }).save();
    return res.status(201).json({
      message: "newRell Create successfully.",
      Reel: newCreateRell,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Somethin went wrong.",
      error,
    });
  }
};
export const getAllRell = async (req, res) => {
  try {
    const Reels = await Reel.find();
    return res.status(200).json({
      message: "All Reel fetch successfully",
      Reel: Reels,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went wrong.",
    });
  }
};
export const getRellById = async (req, res) => {
  try {
    const getReel = await Reel.findById(req.params.id);
    return res.status(200).json({
      message: "Reel fetch successfully.",
      Reel: getReel,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

export const deleteRellById = async (req, res) => {
  try {
    const deleteRell = await Reel.findByIdAndDelete(req.params.id);
    if(!deleteRell){
      return res.status(404).json({
        message:"Reel not found."
      })
    }
    return res.status(200).json({
      message: "successfully deleted",
      Reel: deleteRell,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
