import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";

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
        "http://localhost:5000/stories",
        formdata
      );
      console.log(response);
      setIsCreateing(false)
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
        <label className="text-lg font-semibold opacity-70">Create Story</label>
        <input
          type="file" 
          onChange={(e) => setstoryPicture(e.target.files[0])}
          placeholder=" Write a caption..."
          className="border border-gray-300 outline-none rounded-sm px-6 py-3 "
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">User Full Name</label>
        <input value={userFullName}
          onChange={(e) => setUserFullName(e.target.value)}
          type="text"
          placeholder="Enter user full name"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded-md flex  text-white cursor-pointer"
      >  { isCreateing ?<LoaderCircle className="animate-spin" /> :
        <p>Create Post</p>}
      </button>
    </form>
  );
}

