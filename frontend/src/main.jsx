import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Profile from "./pages/Profile.jsx";
import Explore from "./pages/Explore.jsx";
import Creat from "./pages/Creat.jsx";
import Messages from "./pages/Messages.jsx";
import Notification from "./pages/Notification.jsx";
import Right_Side from "./components/Right_Side.jsx";
import Left_Side from "./components/Left_Side.jsx";
import Reels from "./pages/Reels.jsx";
import Mobile_Nav from "./components/Mobile_Nav.jsx";
import Mobile_Menu from "./components/Mobile_Menu.jsx";
import Mobile_Profile from "./pages/Mobile_Profile.jsx";
import Mobile_Reels from "./Mobilepages/Mobile_Reels.jsx";
import Search from "./pages/Search.jsx";
import Search_Mobile from "./Mobilepages/Search_Mobile.jsx";
import More from "./pages/More.jsx";

export default function Root() {
  const location = useLocation();
  const [Bell, setBell] = useState(false);
  const show = () => setBell(true);
  const hidden = () => setBell(false);

  const [search, setSearch] = useState(false);
  const Show = () => setSearch(true);

  const hide = () => setSearch(false);

  const [showMore, setShowmore] = useState(false);
  const Showmore = () => setShowmore(true);
  const hidemore = () => setShowmore(false);

  return (
    <StrictMode>
      {location.pathname !== "/reels" &&
        location.pathname !== "/Me" &&
        location.pathname !== "/search" && <Mobile_Nav />}

      <div className="flex relative h-screen ">
        <div className="sticky w-4/12 lg:w-2/12 hidden border-r border-gray-300 sm:block top-0 h-screen">
          <Left_Side Show={Show} show={show} Showmore={Showmore} />
        </div>

        <div
          className={`overflow-y-auto md:px-12   top-0 h-screen  ${
            location.pathname === "/" ? "lg:w-7/12" : "lg:w-10/12"
          } ${location.pathname === "/" ? "sm:w-9/12" : "sm:w-12/12"}`}
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search_Mobile />} />

            <Route path="/messages" element={<Messages />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/creat" element={<Creat />} />
            <Route path="/Me" element={<Mobile_Profile />} />
            <Route path="/reel" element={<Mobile_Reels />} />
          </Routes>
        </div>
        {location.pathname === "/" && (
          <div
            className={`   h-screen px-4 bg-gray-50  hidden lg:block ${
              location.pathname !== "/" ? "w-0/12" : "w-3/12"
            }`}
          >
            <Right_Side />
          </div>
        )}
      </div>

      {Bell === true && <Notification hide={hidden} />}

      {search === true && <Search hidden={hide} />}
      {showMore && <More hidemore={hidemore} />}

      <Mobile_Menu />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <Root />
  </BrowserRouter>
);
