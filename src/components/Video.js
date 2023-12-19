import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import "../styles/Video.css";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import video  from "./video.mp4"
import ReactPlayer from 'react-player'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
function Video() {
  return (
    <div className="video">
      <div className="video__left">
        <div className="left__top">
          <h2>Video</h2>
          <div className="setting">
            <SettingsIcon />
          </div>
        </div>

        <div className="Vtextarea">
          <SearchIcon style={{ marginLeft: "10px", opacity: "0.5" }} />
          <input type="text" />
        </div>

        <div className="video__option" style={{backgroundColor: "rgb(242, 238, 245)"}}>
          <div className="left__icon" style={{backgroundColor:"#5268f2",color:"white"}}>
            <OndemandVideoOutlinedIcon />
          </div>
          <h4>Home</h4>
        </div>
        <div className="video__option">
          <div className="left__icon">
            <VideoCameraBackIcon />
          </div>
          <h4>Live</h4>
        </div>

        <div className="video__option">
          <div className="left__icon">
            <MovieFilterIcon />
          </div>

          <h4>Reels</h4>
        </div>
        <div className="video__option">
          <div className="left__icon">
            <MovieCreationIcon />
          </div>
          <h4>Shows</h4>
        </div>

        <div className="video__option">
          <div className="left__icon">
            <RocketLaunchIcon />
          </div>
          <h4>Explore</h4>
        </div>
        <div className="video__option">
          <div className="left__icon">
            <TurnedInIcon />
          </div>
          <h4>Saved Videos</h4>
        </div>
      </div>

      <div className="video__right">
        <div className="video__info">

          <div className="video__info-top">
            <div className="top__left">
              <Avatar/>
              <h5 style={{marginLeft:"5px"}}>Baghi Teach</h5> <h5 style={{color:"blue",marginLeft:"5px"}}>  .Follow</h5>
              <p>Augest 4</p>
            </div>
            <div className="top__right">
               <MoreHorizIcon/>
            </div>
          </div>
          <div className="video__right-middle">
              <h4>hello</h4>
              <ReactPlayer url={video} width="100%" controls muted style={{marginTop:"10px"}}/>
        </div>

        <div className="video__right-bottom">
          <div className="bootom__option">
           <ThumbUpOffAltIcon/>
           <h4>Like</h4>
          </div>
          <div className="bootom__option">
           <ChatBubbleOutlineIcon/>
           <h4>Comment</h4>
          </div>
          <div className="bootom__option">
           <ShareIcon/>
           <h4>Share</h4>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Video;
