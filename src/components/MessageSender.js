import React, { useRef, useState } from "react";
import "../styles/MessageSender.css";
import { Avatar } from "@mui/material";
import VideoCameraBackSharpIcon from "@mui/icons-material/VideoCameraBackSharp";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import img from "./Aa.png";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { ImgDB, db } from "./firebase";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { v4 } from "uuid";
import { useStateValue } from "./StateProvider";

function MessageSender() {
  const [{user}] =  useStateValue()
  const [showModal, SetShowModal] = useState(false);
  const handleModleOpen = () => {
    SetShowModal(true);
    document.body.classList.add("modal-open");
  };
  const handleModleClose = () => {
    SetShowModal(false);
    document.body.classList.remove("modal-open");
  };

  const MyModal = () => {
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");
    const fileInputRef = useRef(null);
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (fileInputRef.current.files.length > 0) {
        const imgs = ref(ImgDB, `imgs/${v4()}`);

        // Upload the image
        uploadBytes(imgs, fileInputRef.current.files[0]).then((data) => {
          console.log(data, "imgs");

          // Get the download URL of the uploaded image
          getDownloadURL(data.ref).then((url) => {
            setImage(url);
            SetShowModal(false);
            document.body.classList.remove("modal-open");

            // Save the message and image URL in Firestore
            addDoc(collection(db, "posts"), {
              message: input,
              timestamp: serverTimestamp(),
              image: url,
            }).then((docRef) => {
              console.log("Document written with ID:", docRef.id);
            });
          });
        });
      } else {
        // If there is no image, save only the message and timestamp
        addDoc(collection(db, "posts"), {
          message: input,
          timestamp: serverTimestamp(),
        }).then((docRef) => {
          console.log("Document written with ID:", docRef.id);
          SetShowModal(false);
          document.body.classList.remove("modal-open");
        });
      }
    };

    const handleIconClick = () => {
      fileInputRef.current.click();
    };

    return (
      <div className="container">
        <div className="container__content">
          <div className="modal__top">
            <h3>Create Post</h3>
            <div className="closeIcon">
              <CloseIcon fontSize="medium" onClick={handleModleClose} />
            </div>
          </div>
          <div className="post__middle">
            <Avatar src={user.photoURL} />
            <div className="name">
              <h3>{user.displayName}</h3>
              <div className="only">
                <span style={{ fontSize: "10px" }}> &#x1f512; </span>
                <p style={{ fontSize: "small", fontWeight: "bold" }}>Only me</p>
                <span style={{ fontSize: "10px", marginLeft: "5px" }}>
                  {" "}
                  &#9660;
                </span>
              </div>
            </div>
          </div>
          <div className="textarea">
            <textarea
              name="textarea"
              id=""
              cols="45"
              rows="5"
              value={input}
              onInput={(e) => setInput(e.target.value)}
              placeholder="What's on your mind"
            ></textarea>
            <div className="extra" style={{ marginLeft: "15px" }}>
              <img src={img} width="40px" alt="" />
              <SentimentSatisfiedAltIcon
                style={{ marginRight: "15px", opacity: "0.4" }}
              />
            </div>
          </div>
          <div className="post__options">
            <h4>Add to your post</h4>
            <AddPhotoAlternateIcon
              onClick={handleIconClick}
              style={{ color: "#292424", cursor: "pointer" }}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>
          <div className="button">
            <button onClick={handleSubmit}>Post</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="messageSender">
      <div className="messageSender__Top">
        <Avatar src={user.photoURL}/>
        <button onClick={handleModleOpen}>What's on your mind</button>
        {showModal && <MyModal />}
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__bootom-item">
          <VideoCameraBackSharpIcon
            style={{ color: "#b33035" }}
            sx={{ fontSize: { xs: "10px", md: "24px" } }}
          />
          <h4>Live video</h4>
        </div>
        <div className="messageSender__bootom-item">
          <PhotoLibraryIcon
            style={{ color: "#b89c30" }}
            sx={{ fontSize: { xs: "10px", md: "24px" } }}
          />
          <h4>Photo/video</h4>
        </div>
        <div className="messageSender__bootom-item">
          <InsertEmoticonIcon
            style={{ color: "#edc10e" }}
            sx={{ fontSize: { xs: "10px", md: "24px" } }}
          />
          <h4>Felling/activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
