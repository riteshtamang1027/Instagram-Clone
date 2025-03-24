import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export default function ViewPost() {
   
const [Post, setPost] = useState();
    const location = useLocation();
    const postId=(location.pathname.split("/")[2]);

    const fetchSinglePost = async ()=>{
        try {

            const response = await axios.get(`http://localhost:5000/posts/${postId}`);
            setPost(response.data.post,"This is response")

            
        } catch (error) {
            console.log("Something went wrong.",error)
            
        }
    }


    useEffect(()=>{
        fetchSinglePost()
    },[postId])
  return (
    <div>
        
     <p>{Post?.caption} </p>
     <img src={Post?.postPicture}/> 

     <img src={Post?.profilePicture} />

     <p>{Post?.likeCount} </p>

    </div>
  )
}
