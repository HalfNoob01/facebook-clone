import { Avatar } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { db } from "./firebase";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
function Post({ id, image, timestamp, message }) {
  const [{user}] = useStateValue()
  const handleDelete = () => {
    if (!id) {
      console.error("Post ID is undefined. Cannot delete document.");
      return;
    }
    const firestore = getFirestore();
    const postRef = doc(firestore, "posts", id);

    deleteDoc(postRef)
      .then(() => {
        console.log("Document deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting document:", error);
      });
  };

  return (
    <div className="post">
      <div className="post__top">
        <div className="post__top-left">
          <Avatar src={user.photoURL}/>
          <div className="post__name">
          <h4>{user.displayName}  </h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__top-right">
          <CloseIcon onClick={handleDelete} />
        </div>
      </div>

      <div className="Post__middle">
        <h4>{message}</h4>
        {image && <img src={image} width="500" height="500" alt="" />}
      </div>

      <div className="post__bottom">
        <div className="post__bottom-item">
          <ThumbUpOffAltIcon />
          <h4>Like</h4>
        </div>
        <div className="post__bottom-item">
          <ChatBubbleOutlineIcon />
          <h4>Comment</h4>
        </div>
        <div className="post__bottom-item">
          <SendIcon />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  );
}

export default Post;
