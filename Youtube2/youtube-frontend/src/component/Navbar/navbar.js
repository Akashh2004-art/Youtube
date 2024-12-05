import React, { useState } from "react"; // Correct way to import React and useState
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person4Icon from "@mui/icons-material/Person4";
import { fabClasses } from "@mui/material";
import SideNavbar from "../SideNavbar/sideNavbar";

const Navbar = ({setsideNavbarFunc, SideNavbar}) => {
  const [userPic,setUserPic] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg");
  const [navbarModal,setNavbarModal] = useState(false);
  const handleClickModal =()=>{
    setNavbarModal(prev=>!prev);
  }
  const setSideNavbarFunc=()=>{
    setSideNavbarFunc(!SideNavbar)
  }
  return (
    <div className="navbar">

      <div className="navbar-left">
        <div className="navbarHamberger" onClick={setSideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <div className="navbar_youtubeImg">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navbar_youtubeImage"
          />
          <div className="navbar_utubeTitle">YouTube</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input
            type="text"
            placeholder="Search"
            className="navbar_searchBoxInput"
          />
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ color: "white" }} />
          </div>
          <div className="navbar_mike">
            <KeyboardVoiceIcon sx={{ color: "white" }} />
          </div>
        </div>
      </div>

      <div className="navbar-right">
        <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <img onClick={handleClickModal} src={userPic} className="navbar-right-logo" alt="Logo" />
      
      {navbarModal &&
      <div className="navbar-modal">
        <div className="navbar-modal-option">Profile</div>
        <div className="navbar-modal-option">Login</div>
        <div className="navbar-modal-option">logout</div>
      </div>  
      }
      </div>
    </div>
  );
};

export default Navbar;
