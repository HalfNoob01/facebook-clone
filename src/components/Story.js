import React from "react";
import "../styles/Story.css";
import { Avatar } from "@mui/material";
function Story({ image, profilePic, title }) {
  return (
    <div className="story">
      <div className="background" style={{ backgroundImage: `url(${image}` }}>
      </div>
      <div className="content">
        <Avatar className="avatarSrc" src={profilePic} sx={{fontSize:{ xs: '20px', md: '24px' }}} />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Story;
