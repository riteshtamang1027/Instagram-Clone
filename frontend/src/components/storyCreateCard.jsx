import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function StoryCreateCard() {
  const [storyPicture, setstoryPicture] = useState(null);
 

  const [userFullName, setUserFullName] = useState("");

  const [isCreateing, setIsCreateing] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setIsCreateing(true)
      const formdata = new FormData();
      formdata.append("userFullName", userFullName);

      formdata.append("storyPicture", storyPicture);


      const response = await axios.post(
      ` ${import.meta.env.VITE_SERVER_URL}/stories`,
        formdata
      );
      toast.success("Successfully story created!");
      setIsCreateing(false);
      setUserFullName("");
    } catch (error) {
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
        <label className="text-lg font-semibold opacity-70">Create Story</label>
        <input required
          type="file" 
          onChange={(e) => setstoryPicture(e.target.files[0])}
          placeholder=" Write a caption..."
          className="border border-gray-300 outline-none rounded-sm px-6 py-3 "
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">User Full Name</label>
        <input required value={userFullName}
          onChange={(e) => setUserFullName(e.target.value)}
          type="text"
          placeholder="Enter user full name"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      
      <button disabled={isCreateing}
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded-md flex items-center gap-x-2 text-white cursor-pointer"
      >  { isCreateing && <LoaderCircle size={20} className="animate-spin" /> }
        <p>Create Story</p>
      </button>
    </form>
  );
}

