import cloudinary from "../lib/cloudinaryConfig.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// Register user (create)
export const RegisterUser = async (req, res) => {
  try {
    // Check if email is already exist or not
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(409).json({
        message: "You already have an account. Please Login.",
      });
    }

    //    2. Hash Password
    const HashPassword = await bcrypt.hash(req.body.password, saltRounds);
    if (!HashPassword) {
      return res.status(500).json({
        message: "Something went wrong to hash the password.",
      });
    }
    // 3. Handle Profile Picture upload in cloudinary
    const file = req.file;
    const cloudinaryResponse = await cloudinary.uploader.upload(file.path);
    // 4. Save in database
    const SaveUser = await new User({
      ...req.body,
      password: HashPassword,
      profilePicture: cloudinaryResponse.secure_url,
    }).save();

    // 5.return the data
    return res.status(201).json({
      message: "You gave been registered successfully",
      data: SaveUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error.",
      code: 500,
    });
  }
};
// difference between
// 1.restapi
// 2.graphicQL

// Login user
export const LoginUser = async (req, res) => {
  try {
    // 1. Check if user exist with this email or not
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      return res.status(404).json({
        message: "Please register first.",
      });
    }
    // fif user exist the compare  the password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalide password",
      });
    }

    // 3. generate jwt token if password is match
    const userToken = jwt.sign(
      { email: userExist.email, id: userExist._id },
      process.env.JWT_SECRET,
      { expiresIn:"1h" }
    );
    return res.status(200).json({
      message: "user login successfull.",
      token: userToken,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal Server Error.",
      code: 500,
    });
  }
};

// delete
export const deleteUser = async (req, res) => {
  try {
    // 1. only th owner can itself
    // get id from token and match that with req.params .id
    // const const token = 123456
    // decode the token and get _id
    // allow delete only when _id and req.params.id match

    const deleteuser = await User.findByIdAndDelete(req.params.id);
    if(!deleteuser){
      return res.status(404).json({
        message:"Data not found."
      });
    }
    return res.status(200).json({
      message: "Success.",
    });
  } catch (error) {
    return res.status(500).json({
      message: ("Internal Server Error.", error),
      code: 500,
    });
  }
};

// update
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);


    // TODO :  Token verification
    let newHashedPassword = user.password;
    if (req.body.password) {
      newHashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    }
    let newprofilePicture = user.profilePicture;
    if (req.file) {
      const cloudinaryResponse = await cloudinary.uploader.upload(
        req.file.path
      );
      newprofilePicture = cloudinaryResponse.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        password: newHashedPassword,
        profilePicture: newprofilePicture,
      },
      { new: true }
    );
    return res.status(200).json({ 
      message: "Updated successfull",
    data:updatedUser });
  } catch (error) {
    return res.status(500).json({
      message: ("Internal Server Error.", error),
      code: 500,
    });
  }
};
// get all users
export const getAllUsers = async (req, res) => {
  try {
    const getAllUsers = await User.find();
    const userCount = User.find().countDocuments;
    return res.status(200).json({
      message: "Success.",
      user: getAllUsers,
      countDocuments: userCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: ("Internal Server Error.", error),
      code: 500,
    });
  }
};
// get user
export const getUserById = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    if (!getUser) {
      return res.status(404).json({
        message: "User doesnot exist matching the given id",
      });
    }
    return res.status(200).json({
      message: "Success.",
      user: getUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: ("Internal Server Error.", error),
      code: 500,
    });
  }
};
