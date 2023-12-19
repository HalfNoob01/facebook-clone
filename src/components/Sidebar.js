import React from "react";
import "../styles/Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import Groups2Icon from "@mui/icons-material/Groups2";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FlagIcon from "@mui/icons-material/Flag";
import { useStateValue } from "./StateProvider.js";
function Sidebar() {
  const [{user}] = useStateValue()
  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow Icon={GroupIcon} title="Friends" />
      <SidebarRow Icon={OndemandVideoIcon} title="Friends" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={HistoryIcon} title="Memories" />
      <SidebarRow Icon={TurnedInIcon} title="Saved" />
      <SidebarRow Icon={Groups2Icon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={NewspaperIcon} title="Feeds" />
      <SidebarRow Icon={LeaderboardIcon} title="Events" />
      <SidebarRow Icon={KeyboardArrowDownIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
