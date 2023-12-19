import React, { useEffect, useState } from "react";
import StoryRow from "./StoryRow";
import MessageSender from "./MessageSender";
import "../styles/Feed.css";
import Post from "./Post.js";
import { db } from "./firebase.js";
import {
  getDocs,
  orderBy,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postCollection = collection(db, "posts");
    const postQuery = query(postCollection, orderBy("timestamp", "desc"));

    const fetcInitialPosts = async () => {
      const querySnapshot = await getDocs(postQuery);
      const postData = [];
      querySnapshot.forEach((doc) => {
        postData.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postData);
    };

    fetcInitialPosts();

    const unsubscribe = onSnapshot(postQuery, (querySnapshot) => {
      const postData = [];
      querySnapshot.forEach((doc) => {
        postData.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postData);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div
      className="feed"
      style={{
        marginTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StoryRow />
      <div className="messagesender">
        <MessageSender />
      </div>
      {posts.map((post) => {
        return (
          <Post
            id={post.id}
            timestamp={post.timestamp}
            image={post.image}
            message={post.message}
          />
        );
      })}
    </div>
  );
}

export default Feed;
