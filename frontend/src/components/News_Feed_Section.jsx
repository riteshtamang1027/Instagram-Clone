import axios from "axios";
import {
  Bookmark,
  Eye,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function News_Feed_Section() {
  const [Post, setPost] = useState();

  const fetchAllPosts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/posts`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("my-token")}`,
        },
      });
      console.log(response.data);
      setPost(response.data.data);
    } catch (error) {
      // console.log(error)
      console.log("Something went wrong ", error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const deletePost = async (_id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/posts/${_id}`
      );
      fetchAllPosts();
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="mt-8 lg:px-20  space-y-4">
      {/* Single Post */}

      {Post?.map((eachpost, index) => (
        <div key={index} className=" space-y-4  ">
          <div className="flex items-center  justify-between">
           
            <div className="flex items-center gap-2 mb-4">
              <img
                className="rounded-full object-cover cursor-pointer  h-12 w-12 "
                src={eachpost.profilePicture}
                alt="Image"
              />

              <p className="font-bold">
                {eachpost.userName}

                <span className="text-xs mx-2 opacity-70 font-semibold">
                  {eachpost.createdAt}
                </span>
              </p>
            </div>

            <div className="flex items-center  gap-x-2">
              <NavLink to={`/view_post/${eachpost._id}`}>
                {" "}
                <Eye
                  size={20}
                  strokeWidth={2}
                  className="opacity-70 cursor-pointer"
                />
              </NavLink>

              <Trash
                onClick={() => deletePost(eachpost._id)}
                size={20}
                strokeWidth={2}
                className="opacity-70 cursor-pointer"
              />

              <MoreHorizontal
                size={26}
                strokeWidth={2}
                className="opacity-70 cursor-pointer"
              />
            </div>
          </div>
          <div className="space-y-3 border border-gray-100 rounded-xl  ">
            <img
              className=" rounded-sm object-cover h-88 sm:h-[90vh] w-full cursor-pointer"
              src={eachpost.postPicture}
              alt=""
            />
            <div className="flex items-center justify-between opacity-80 px-4">
              <div className="flex gap-4 ">
                <Heart className="cursor-pointer" size={26} />
                <MessageCircle className="cursor-pointer" size={26} />
                <Send className="cursor-pointer" size={26} />
              </div>
              <Bookmark className="cursor-pointer" size={26} />
            </div>

            <p className="px-4">{eachpost.caption}</p>
          </div>

          <hr className="text-gray-300 mt-8" />
        </div>
      ))}
    </div>
  );
}
