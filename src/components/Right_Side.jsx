import React from "react";
import Myimage from '../../public/rock.jpg'

export default function Right_Side() {
  return (
    <div className=" px-4 pt-10">
      <div className="flex items-center justify-between font-semibold opacity-70 mb-8 px-2">
        <p>Suggested for you</p>
        <p className="text-blue-500 cursor-pointer">See All</p>
      </div>

      <div className="space-y-6 px-2 ">
        {People.map((item, index) => (
          <div key={index} className="flex items-center justify-between">

            <div className="flex gap-x-2 ">    
            
              <img
                height={50}
                className="rounded-full object-cover"
                width={50}
                src={item.Profile}
                alt="Image"
              />

              <div>
                <p className="font-semibold text-lg">{item.Username}</p>
                <p className="opacity-60">{item.Followedby}</p>
              </div>
            </div>

            <p className="text-blue-500 font-semibold ">Follow</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const People = [

  {
    Profile: Myimage,
    Username: "Ritesh",
    Followedby: "Tamang",
  },

  {
    Profile:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Username: "Aakhe",
    Followedby: "Tamang",
  },

  {
    Profile:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    Username: "Mam",
    Followedby: "Tamang",
  },

  {
    Profile:
      "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "Aasang",
    Followedby: "Tamang",
  },

  {
    Profile:
      "https://media.istockphoto.com/id/2060433249/photo/photo-of-young-girl-wearing-t-shirt-isolated-yellow-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=hk99PC5UEh5LemwxdHqRKrFCVEu2eKuL4W9t0n74mfU=",
    Username: "Aani",
    Followedby: "Tamang",
  },

];
