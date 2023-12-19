import React from "react";
import Story from "./Story";
import "../styles/StoryRow.css";
import YourStory from "./YourStory";
import { useStateValue } from "./StateProvider";
import aa from "./Aa.png"
function StoryRow() {
  const [{user}] = useStateValue()
  return (
    <div className="storyrow">
      <YourStory
        image={user.photoURL}
        profilePic="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        title="Create story"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvW5P1BUw2zSekmBcVX0ujiu84MTBD1YGTw&usqp=CAU"
        profilePic={aa}
        title="Rahul"
      />
      <Story
        image="https://html.com/wp-content/uploads/flamingo.webp"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuGgxyb_il99xzUwBFWlC2X7kAk-3nwdycrZmnC9ZHw&s"
        title="steve"
      />
      <Story
        image="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81"
        profilePic="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="suraj"
      />
    </div>
  );
}

export default StoryRow;
