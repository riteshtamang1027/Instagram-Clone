import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router";

export default function Right_Side() {
  const [fetching, setFetching] = useState(false);

  const [Users, setUsers] = useState();
  const fetchAllUsers = async () => {
    try {
      setFetching(true);
      const response = await axios.get(
        "https://insta-server-l8g7.onrender.com/users"
      );

      setUsers(response.data.user, "This is user response");
      setFetching(false);
    } catch (error) {
      console.log("Something went wrong.");
      setFetching(false);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className=" px-4 pt-10 space-y-4">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-x-2">
         <NavLink to={"/profile"} > <img
            className="w-14 h-14 rounded-full object-cover cursor-pointer "
            src="https://images.unsplash.com/photo-1742943679519-bb9eb364b152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
          /></NavLink>
          <p className="flex flex-col">
            {" "}
            <NavLink to={"/profile"}><span className="font-semibold cursor-pointer">riteshlama1027</span></NavLink>
            <span className="opacity-70">Ritesh lama</span>
          </p>
        </div>
        <p className="text-sky-700 cursor-pointer hover:text-black text-sm font-semibold opacity-70">Switch</p>
      </div>
      <div className="flex items-center justify-between font-semibold opacity-70 mb-8 px-2">
        <p>Suggested for you</p>
        <p className="text-blue-500 cursor-pointer ">See All</p>
      </div>

      <div className="space-y-6 px-2 ">
        {fetching ? (
          Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-x-4"
              >
                <div className="flex">
                  <div className="h-16 w-16 bg-gray-300 rounded-full animate-pulse border-3 border-orange-700 p-0.5"></div>
                  <div>
                    <div className="space-y-1 bg-gray-100  rounded-sm p-2">
                      <div className="w-36 h-8 rounded-sm animate-pulse bg-gray-300"></div>
                      <div className="w-22 h-3 rounded-sm animate-pulse bg-gray-300"></div>
                    </div>
                  </div>
                </div>
                <div className="w-28 rounded-sm h-8 animate-pulse bg-gray-300"></div>
              </div>
            ))
        ) : (
          <div className="space-y-6 px-2 ">
            {Users?.map((item, index) => (
              <NavLink
                key={index}
                to={`/profile/${item._id}`}
                className="flex items-center justify-between"
              >
                <div className="flex gap-x-2 ">
                  <img
                    height={1050}
                    className="rounded-full object-cover w-14 h-14 cursor-pointer"
                    width={1050}
                    src={item.profilePicture}
                    alt="Image"
                  />

                  <div>
                    <p className="font-semibold text-lg">
                      {item.fullName
                        .toLowerCase()
                        .replace(" ", "")
                        .slice(0, 10) + "..."}
                    </p>
                    <p className="opacity-60">hello</p>
                  </div>
                </div>

                <p className="text-blue-500 font-semibold cursor-pointer">
                  Follow
                </p>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

//   {
//     Profile: Myimage,
//     Username: "Ritesh",
//     Followedby: "Tamang",
//   },

//   {
//     Profile:
//       "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     Username: "Aakhe",
//     Followedby: "Tamang",
//   },

//   {
//     Profile:
//       "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
//     Username: "Mam",
//     Followedby: "Tamang",
//   },

//   {
//     Profile:
//       "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Username: "Aasang",
//     Followedby: "Tamang",
//   },

//   {
//     Profile:
//       "https://media.istockphoto.com/id/2060433249/photo/photo-of-young-girl-wearing-t-shirt-isolated-yellow-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=hk99PC5UEh5LemwxdHqRKrFCVEu2eKuL4W9t0n74mfU=",
//     Username: "Aani",
//     Followedby: "Tamang",
//   },

// ];
