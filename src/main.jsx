import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes,Route } from "react-router";
import Mobile_Menu from "./components/Mobile_Menu.jsx";
import Mobile_Nav from "./components/Mobile_Nav.jsx";
import Profile from "./pages/Profile.jsx";
import Reels from "./pages/Reels.jsx";
import Explore from "./pages/Explore.jsx";
import Creat from "./pages/Creat.jsx";
import Messages from "./pages/Messages.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Mobile_Nav/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile/> } />
      <Route path="/notifications" element={<Notification/>} />
      <Route path="/messages" element={<Messages/>} />
      <Route path="/reels" element={<Reels/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/creat" element={<Creat/>} />
    </Routes>
    <Mobile_Menu/>

    </BrowserRouter>
  </StrictMode>
);
