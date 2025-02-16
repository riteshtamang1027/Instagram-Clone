import React from "react";
import News_Feed_Section from "./News_Feed_Section";

export default function Middle_Area() {
  return (
   <div className="px-4  max-sm:mt-14  md:pt-4 ">
    
      <div className="flex mt-4 gap-x-4 overflow-x-scroll space-y-2">
        {Stories.map((item, index) => (
          <div key={index} className=" flex flex-col items-center gap-1   ">
            <img
              className="rounded-full object-cover h-16 w-16 border-3 border-orange-700 p-0.5 cursor-pointer"
              src={item.profiltpicture}
              alt="Image"
            />
            <p className="text-sm opacity-70 font-semibold">
              {item.Username.slice(0, 10)}
            </p>
          </div>
        ))}
      </div>

      <News_Feed_Section />
    </div>
  );
}

const Stories = [
  
  {
    profiltpicture:
      "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

    StoryPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "riteshtamang",
  },
  {
    profiltpicture:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

    storyPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "lokichaulagain",
  },

  {
    profiltpicture:
      "https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

    storyPicture:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    Username: "bijaydevkota",
  },

  {
    profiltpicture:
      "https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",

    storyPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "tapendrabatala",
  },

  {
    profiltpicture:
      "https://media.istockphoto.com/id/1626178861/photo/happy-handsome-young-business-man-looking-at-camera-in-office-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=tJqkNr1fEBlNbHWLLSmm3hDWqQENlNP_POHyoPphWp4=",
    storyPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "saritasharma",
  },

  {
    profiltpicture:
      "https://media.istockphoto.com/id/2147591359/photo/business-woman-texting-on-her-cell-phone-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=q5VjuYELg0Y3dBmp6-TKeFsHgDA283w6zObraaabWpI=",
    storyPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "grismakhatiwada",
  },

  {
    profiltpicture:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",

    storyPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "prabinjoshi",
  },

  {
    profiltpicture:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    storyPicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "yangmalama",
  },
];
