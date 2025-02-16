import { X } from "lucide-react";
// import { Plus } from "lucide-react";

import React from "react";

export default function Discover_People() {
  return (
   <>
   <div className="text-xs font-semibold flex items-center justify-between ">
        <p className="opacity-70">Discover people</p>
       <p className="text-blue-600">See All</p>
     </div>

    <div className="mt-4 overflow-x-scroll ">
    
        <div className="flex gap-x-2 ">
          {Follow.map((item, index) => (
              <div
                key={index}
                className="w-30 h-40  rounded-md bg-gray-100 relative  overflow-hidden cursor-pointer"
              
              >
               <X size={16} className="absolute  text-gray-600 top-1 right-1" />
              <div className="absolute flex flex-col items-center top-8 gap-y-2">
               <img
                 className="w-16 h-16 object-cover rounded-full"
                  src={item.profile}
                 alt=""
                />
                <div className="text-center ml-2">
                  <p className="text-xs opacity-70">{item.Name}</p>
                 <p className="text-xs opacity-70">
                    Followed by <span>{item.Followedby}</span>{" "}
                 </p>
                </div>

               <button className="bg-sky-500 text-xs text-white font-semibold px-6 py-1 mt-4 rounded-md">
                 Follow
                </button>

             </div>
              </div>
            
          ))}
        </div>
      
    </div>
  
   
   </>
    
   
   
  );
}

const Follow = [
  {
    profile:
      "https://images.unsplash.com/photo-1542685295-b280fd4d2c59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Ritesh Tamang",
    Followedby: "someone1",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: " Sharamma Magar",
    Followedby: "someone12",
  },
  
  {
    profile:
      "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Maw Maw",
    Followedby: "someone12",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Maw Maw",
    Followedby: "someone12",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Maw Maw",
    Followedby: "someone12",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Maw Maw",
    Followedby: "someone12",
  },
  {
    profile:
      "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Name: "Maw Maw",
    Followedby: "someone12",
  },
];

// const Story = [
//   {
//     story:
//       "https://plus.unsplash.com/premium_photo-1673264933056-8f2f9c87742f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzfGVufDB8fDB8fHww",
//     Profile:
//       "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=8Ugqyp2TveGKDtzT_n18b3ECDJQHvfLhyuU1JDdfVDQ=",
//     Username: "Sunita Sharma",
//   },

//   {
//     story:
//       "https://images.unsplash.com/photo-1616731948638-b0d0befef759?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
//     Profile:
//       "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc=",
//     Username: "Alex fagution",
//   },
//   {
//     story:
//       "https://media.istockphoto.com/id/2138658675/photo/started-with-a-mile-now-were-at-marathons-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=BL-tF4KTuOm_k4c7lSGu0yAfF7hjUCq-NGjrYAKb4X4=",
//     Profile:
//       "https://media.istockphoto.com/id/1626178861/photo/happy-handsome-young-business-man-looking-at-camera-in-office-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=tJqkNr1fEBlNbHWLLSmm3hDWqQENlNP_POHyoPphWp4=",
//     Username: "Jhons Duran",
//   },
//   {
//     story:
//       "https://media.istockphoto.com/id/1761537213/photo/christmas-tree-with-garland-lights-evening-city-with-blurred-background.jpg?s=612x612&w=0&k=20&c=6lJ_fC-USoqnSnEFCyHAG24CAnqRM5RcJvtH-pWj3ag=",
//     Profile:
//       "https://images.unsplash.com/photo-1455274111113-575d080ce8cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Username: "Ritesh Tamang",
//   },
//   {
//     story:
//       "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.jpg?s=612x612&w=0&k=20&c=1Zq2sj3W0tWcpc-n1fVt4dQQOBGhtwcAk1H2eQ5MAbI=",
//     Profile:
//       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Username: "Sony Sandro",
//   },
//   {
//     story:
//       "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=612x612&w=0&k=20&c=vmC-jVG6PNPRQtgtBp2y1caApEGYjt-fDrm0VzRgvK8=",
//     Profile:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
//     Username: "Allexa",
//   },
 
// ];
