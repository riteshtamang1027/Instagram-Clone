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
        ` ${import.meta.env.VITE_SERVER_URL}/users`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("my-token")}`,
          },
        }
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
          <img
            className="w-14 h-14 rounded-full object-cover cursor-pointer "
            src="https://images.unsplash.com/photo-1742943679519-bb9eb364b152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
          />
          <p className="flex flex-col">
            {" "}
            <span className="font-semibold cursor-pointer">riteshlama1027</span>
            <span className="opacity-70">Ritesh lama</span>
          </p>
        </div>
        <p className="text-sky-700 cursor-pointer hover:text-black text-sm font-semibold opacity-70">
          Switch
        </p>
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
                    <p className="opacity-60">Follow</p>
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
