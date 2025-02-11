import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Mobile_Menu from "./components/Mobile_Menu.jsx";
import Profile from "./pages/Profile.jsx";
import Explore from "./pages/Explore.jsx";
import Creat from "./pages/Creat.jsx";
import Messages from "./pages/Messages.jsx";
import Notification from "./pages/Notification.jsx";
import Mobile_Reels from "./pages/Mobile_Reels.jsx";
import Right_Side from "./components/Right_Side.jsx";
import Left_Side from "./components/Left_Side.jsx";
import Mobile_Nav from "./components/Mobile_Nav.jsx";
import Reels from "./pages/Reels.jsx";
export default function Root() {

  const location = useLocation();

  return (
    <div>
 <StrictMode>
      {location.pathname !== "/reel" && <Mobile_Nav />}
    

      <div  className="flex relative h-screen ">
        <div className="sticky w-3/12 lg:w-2/12 hidden border-r border-gray-300 sm:block top-0 h-screen">
          <Left_Side />
        </div>

        <div className="overflow-y-auto lg:w-6/12 sm:w-9/12   top-0 h-screen ">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/reels" element={<Reels/>} />
            <Route path="/reel" element={<Mobile_Reels />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/creat" element={<Creat />} />
          </Routes>
        </div>
        <div className="sticky top-0 w-3/12 lg:w-4/12 h-screen bg-gray-50 hidden lg:block">
        { location.pathname === "/" &&<Right_Side />}
        </div>
      </div>

      <Mobile_Menu />
    </StrictMode>
    </div>

   
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <Root />
  </BrowserRouter>
);
