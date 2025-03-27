import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function PostCreateCard() {
const [IsLoading, setIsLoading] = useState(false);

  const [caption, setCaption] = useState("");
  const [name, setName] = useState("");

  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const formdata = new FormData();
      formdata.append("postPicture", image);
      formdata.append("profilePicture", image2);

      formdata.append("caption", caption);
      formdata.append("userName", name);


      const response = await axios.post(
        "https://insta-server-l8g7.onrender.com/posts",
        formdata
      );
      toast.success(" Successfully Post Created!")
      setIsLoading(false)
      setCaption("");
      setName("");
    } catch (error) {
      console.log("Something went wrong");
      setIsLoading(false)
    }
  };

  // console.log(caption,image)
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-300 rounded-md p-4 space-y-6"
    >
      <h1 className="text-2xl font-bold text-center opacity-90">
        Create New Post
      </h1>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">Post Caption</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder=" Write a caption..."
          className="border border-gray-300 outline-none rounded-sm px-6 py-3 "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">Post Picture</label>
        <input required
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">User ProfilePicture</label>
        <input required
          onChange={(e) => setImage2(e.target.files[0])}
          type="file"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold opacity-70">User Name</label>
        <input required value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" placeholder="Enter your name"
          className="border opacity-60 border-gray-300 outline-none rounded-sm px-6 py-2"
        />
      </div>
      <button disabled={IsLoading}
        type="submit"
        className="bg-blue-500 px-4 flex items-center gap-x-2 py-2 rounded-md text-white cursor-pointer"
      >
      { IsLoading && <LoaderCircle size={20} className="animate-spin"/>}
        Create Post
      </button>
    </form>
  );
}
