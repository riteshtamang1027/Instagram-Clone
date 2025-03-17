import { Story } from "../models/storyModel.js";
import cloudinary from "../lib/cloudinaryConfig.js";

export const creatStory = async (req, res) => {
  try {
    const file = req.file;
    const cloudinaryResponse = await cloudinary.uploader.upload(file.path);

    const newCreateStory = await new Story({
      ...req.body,
      storyPicture: cloudinaryResponse.secure_url,
    }).save();
    return res.status(201).json({
      message: "newStory Create successfully.",
      story: newCreateStory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Somethin went wrong.", 
      error,
    });
  }
};
export const getAllStory = async (req, res) => {
  try {
    const Storories = await Story.find();
    return res.status(200).json({
      message: "All stories fetch successfully",
      story: Storories,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went wrong.",
    });
  }
};
export const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    return res.status(200).json({
      message: "story fetch successfully.",
      story: story,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

export const deleteStoryById = async (req, res) => {
  try {
    const deleteStory = await Story.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "successfully deleted",
      story: deleteStory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
