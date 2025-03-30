import React, { useEffect, useState } from "react";
import News_Feed_Section from "./News_Feed_Section";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Middle_Area() {

const [CurrentImage, setCurrentImage] = useState(null);



  const [IsFetching, setIsFetching] = useState(false);

  const [Stories, setStories] = useState(null);

  const fetchAllStories = async () => {
    try {
      setIsFetching(true);
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/stories`,{
        headers:{
          authorization:`bearer ${localStorage.getItem("my-token")}`
        }
       
      });
      console.log(response)
      setStories(response.data.story);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log("Something went wrong to fetch stories.", error);
    }
  };
  // console.log(Stories, "this is story");

  useEffect(() => {
    fetchAllStories();
  }, []);

  return (
    <div className="px-4 sm:mx-12  max-sm:mt-14  md:pt-4 ">


      <div className="flex mt-4 gap-x-4 overflow-x-scroll space-y-2">
        {IsFetching ? (
          Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="h-16 w-16 bg-gray-300 rounded-full animate-pulse border-3 border-orange-700 p-0.5"
              ></div>
            ))
        ) : (
          <div className="flex mt-4 gap-x-4 space-y-2">
            {Stories?.map((item, index) => (
               <Popup contentStyle={{width:"30vw", alignContent:"center", height:"80vh", backgroundColor:"black",border:"1px solid black", borderRadius:"5px"}} onOpen={()=>setCurrentImage(item.storyPicture)}  key={index} modal trigger={  <div className=" flex flex-col items-center gap-1 justify-center">
               <img
                 className="rounded-full  object-cover h-16 w-16 border-3 border-orange-700 p-0.5 cursor-pointer"
                 src={item.storyPicture}
                 alt="Image"
               />


               <p className="text-sm opacity-70 font-semibold">
                 {item.userFullName.toLowerCase().replace(" ","").slice(0, 10)+"..."}
               </p>
             </div>} position="right center">
               <img width={500} height={500} src={CurrentImage} alt="" />
             </Popup>
            
            ))}
          </div>
        )}
      </div>

      <News_Feed_Section />
    </div>
  );
}

