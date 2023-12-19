import "./App.css";
import Feed from "./components/Feed.js";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Widgets from "./components/Widgets.js";
import { useStateValue } from "./components/StateProvider.js";
import Login from "./components/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Video.js";
import Marketplace from "./components/Marketplace.js";
import Groups from "./components/Groups.js";
import Gaming from "./components/Gaming.js";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
      <BrowserRouter>
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
            <Routes>
              <Route path="/" element={
                <div className="app__body">
                <Sidebar className="sidebar"/>
                <Feed className="feed"/>
                <Widgets className="widgets"/>
                </div>
              }/>
              <Route path="/video" element={<Video/>}/>
              <Route path="/marketplace" element={<Marketplace/>}/>
              <Route path="/groups" element={<Groups/>}/>
              <Route path="/gaming" element={<Gaming/>}/>
            </Routes>
        </>
      )}
    </div>
      </BrowserRouter>
  );
}

export default App;
