import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function LoginCard() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    console.log(email,password);

    const handleLogin =async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/users/login`,{
                email,password
            })
            console.log(response)
            toast.success(response?.data?.message);
            setemail("");
            setpassword("");
            localStorage.setItem("my-token",response?.data?.token)
        } catch (error) {
            console.log("something went wrong");
            toast.error("something went wrong");

            
        }
    }
  return (
    <form onSubmit={handleLogin} className='border border-gray-300 space-y-4 mt-12 px-6 rounded-md py-4'>
        
        <div className='flex flex-col gap-4'>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} className='border border-gray-300 px-4 py-2 outline-none rounded-md' type="text"  id="email" placeholder='Entery your email address' />
        </div>

        <div className='flex flex-col gap-4'>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} className='border border-gray-300 px-4 py-2 outline-none rounded-md' type="text"  id="password" placeholder='****' />
        </div>
        <button type='submit' className='bg-blue-500 px-4 py-2  text-white rounded-md flex gap-2 items-center cursor-pointer'>Login</button>
      
    </form>
  )
}
