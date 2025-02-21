import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  
} from "lucide-react";

export default function News_Feed_Section() {
  return (
    <div  className="mt-8 lg:px-20  space-y-4">
      {/* Single Post */}
     
      {
        Post.map((eachpost,index)=>(
            <div key={index} className=" space-y-4  ">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-2 mb-4">
            <img
              className="rounded-full object-cover cursor-pointer  h-12 w-12 "
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

          <MoreHorizontal size={26} strokeWidth={2} className="opacity-70 cursor-pointer" />
        </div>
        <div className="space-y-3 ">
          
        <img
          className=" rounded-sm object-cover  h-[70vh] sm:h-[90vh] w-full cursor-pointer"
          src={eachpost.Post_Picture}
          alt=""
        />
        <div className="flex items-center justify-between opacity-80">
          <div className="flex gap-4 ">
            <Heart className="cursor-pointer"   size={26}/>
            <MessageCircle className="cursor-pointer" size={26}/>
            <Send className="cursor-pointer" size={26}/>
          </div>
          <Bookmark className="cursor-pointer" size={26}/>
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
      "https://media.istockphoto.com/id/1626178861/photo/happy-handsome-young-business-man-looking-at-camera-in-office-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=tJqkNr1fEBlNbHWLLSmm3hDWqQENlNP_POHyoPphWp4=",
    Username: "Ritesh Tamang",
    Post_Picture:
      "https://images.unsplash.com/photo-1611417361507-7d77bbc20a73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2VzfGVufDB8fDB8fHww",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    Username: "Prabin gharti",
    Post_Picture:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://media.istockphoto.com/id/2147591359/photo/business-woman-texting-on-her-cell-phone-at-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=q5VjuYELg0Y3dBmp6-TKeFsHgDA283w6zObraaabWpI=",
    Username: "Sharma",
    Post_Picture:
      "https://images.unsplash.com/photo-1616731948638-b0d0befef759?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc=",
    Username: "Caption",
    Post_Picture:
      "https://plus.unsplash.com/premium_photo-1677410645114-4831f754e5fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2VzfGVufDB8fDB8fHww",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
  {
    Profile_Picture:
      "https://images.unsplash.com/photo-1591738802175-709fedef8288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2VzfGVufDB8fDB8fHww",
    Username: "Samir",
    Post_Picture:
      "https://images.unsplash.com/photo-1591738802175-709fedef8288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2VzfGVufDB8fDB8fHww",
    Caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia perferendis atque inventore impedit temporibus corporis?",
  },
];
