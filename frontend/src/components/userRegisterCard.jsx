import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function UserRegisterCard() {
  const [ProfilePicture, setProfilePicture] = useState(null);
 

  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState();


  const [isCreateing, setIsCreateing] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setIsCreateing(true)
      const formdata = new FormData();
      formdata.append("fullName", FullName);
      formdata.append("email", email);
      formdata.append("password", password);


      formdata.append("profilePicture", ProfilePicture);


      const response = await axios.post(
        "https://insta-server-l8g7.onrender.com/users/register",
        formdata
      );
      setIsCreateing(false)
  toast.success('Successfully Created!');
  setEmail("");
  setFullName("");
  setPassword("");
  setProfilePicture(null);

    } catch (error) {
      console.log(error);
      console.log("Something went wrong");
      setIsCreateing(false)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-300 rounded-md p-4 space-y-6"
    >
      <h1 className="text-2xl font-bold text-center opacity-90">
        Create New Post
      </h1>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">Select your profile picture</label>
        <input
          type="file" 
          onChange={(e) => setProfilePicture(e.target.files[0])}
          placeholder=" Write a caption..."
          className="border border-gray-300 outline-none rounded-sm px-6 py-3 "
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">User Full Name</label>
        <input value={FullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Enter user full name"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">User email</label>
        <input value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter user full name"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">Enter your password</label>
        <input value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter user full name"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      
      <button disabled={isCreateing}
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded-md flex items-center gap-x-2  text-white cursor-pointer"
      >  { isCreateing && <LoaderCircle size={20} className="animate-spin" />}
        <p>Create user account</p>
      </button>
     
    </form>
  );
}

