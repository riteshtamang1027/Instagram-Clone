import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function ViewPost() {
  const [IsSinglePosted, setIsSinglePosted] = useState(false);

  const [Post, setPost] = useState();
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const fetchSinglePost = async () => {
    try {
      setIsSinglePosted(true);
      const response = await axios.get(`http://localhost:5000/posts/${postId}`);
      setPost(response.data.post);
      setIsSinglePosted(false);
    } catch (error) {
      setIsSinglePosted(false);
      console.log("Something went wrong.", error);
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, [postId]);
  return (
    <div className="mt-8 lg:px-20  space-y-4">
      {IsSinglePosted ? (
        <div className=" space-y-4  ">
          <div className="flex items-center  justify-between">
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-full object-cover cursor-pointer bg-gray-300 animate-pulse h-12 w-12 ">
                {" "}
              </div>

              <p className="font-bold">
                <span className="text-xs mx-2 opacity-70 font-semibold"></span>
              </p>
            </div>
          </div>

          <div className="space-y-3 ">
            <div className=" rounded-sm object-cover bg-gray-300 animate-pulse  h-[70vh] sm:h-[90vh] w-full cursor-pointer" />
          </div>

          <hr className="text-gray-300 mt-8" />
        </div>
      ) : (
        <div className=" space-y-4  ">
          <div className="flex items-center  justify-between">
            <div className="flex items-center gap-2 mb-4">
              <img
                className="rounded-full object-cover cursor-pointer  h-12 w-12 "
                src={Post?.profilePicture}
                alt="Image"
              />

              <p className="font-bold">
                {Post?.userName}
                <span className="text-xs mx-2 opacity-70 font-semibold">
                  {Post?.createdAt}
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-3 ">
            <img
              className=" rounded-sm object-cover  h-[70vh] sm:h-[90vh] w-full cursor-pointer"
              src={Post?.postPicture}
              alt=""
            />

            <p>{Post?.caption}</p>
          </div>

          <hr className="text-gray-300 mt-8" />
        </div>
      )}
    </div>
  );
}
