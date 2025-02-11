import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  
} from "lucide-react";

export default function News_Feed_Section() {
  return (
    <div  className="mt-8 lg:px-20 px-4 space-y-8">
      {/* Single Post */}
     
      {
        Post.map((eachpost,index)=>(
            <div key={index} className=" space-y-4">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-2 mb-4">
            <img
              className="rounded-full object-cover  h-16 w-16"
              src={eachpost.Profile_Picture}
              alt="Image"
            />
            <p className="font-bold">
            {eachpost.Username} 
              <span className="text-xs mx-2 opacity-70 font-semibold">
                 .10 min ago
              </span>
            </p>
          </div>

          <MoreHorizontal size={26} strokeWidth={2} className="opacity-70" />
        </div>
        <div className="space-y-3 ">
          
        <img
          className=" rounded-sm object-cover  h-[70vh] w-full"
          src={eachpost.Post_Picture}
          alt=""
        />
        <div className="flex items-center justify-between opacity-70">
          <div className="flex gap-4 ">
            <Heart />
            <MessageCircle />
            <Send />
          </div>
          <Bookmark />
        </div>
        
        <p>
         
          {eachpost.Caption}
        </p>
        </div>

        
      <hr className="text-gray-300 mt-8" />

      </div>

         ) )
      }
    </div>
  );
}

const Post = [
  {
    Profile_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "Ritesh Tamang",
    Post_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "Prabin gharti",
    Post_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "Sharma",
    Post_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "Caption",
    Post_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Username: "Samir",
    Post_Picture:
      "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
];
