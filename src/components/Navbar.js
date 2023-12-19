import React from 'react'
import "../styles/Navbar.css"
import "../styles/responsive.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';
import { useStateValue } from './StateProvider';
import {  NavLink } from "react-router-dom";
function Navbar() {
  const [{user}] = useStateValue()
  return (
    <div className='navbar' >

      <div className="navbar__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
        <div className="input">
            <SearchIcon style={{opacity:0.5,marginLeft:"10px"}} sx={{fontSize:{ xs: '20px', md: '24px' }}}/>
            <input type="text" placeholder='Search Facebook' />
        </div>
      </div>

      <div className="navbar__middle">
        <NavLink to="/" className="navbar__option" activeClassName="active" title='Home'>
         <HomeOutlinedIcon  sx={{fontSize:{ xs: '20px', md: '24px' }}}/>
        </NavLink>
        <NavLink to="/video" className="navbar__option" activeClassName="active" title='Video'>
          <OndemandVideoIcon sx={{fontSize:{ xs: '20px', md: '24px' }}} />
        </NavLink>
        <NavLink to="/marketplace" className="navbar__option" title='Marketplace' activeClassName="active">
         <StorefrontIcon  sx={{fontSize:{ xs: '20px', md: '24px' }}}/>
        </NavLink>
        <NavLink to="/groups" className="navbar__option" activeClassName="active"title='Groups'>
         <GroupsOutlinedIcon sx={{fontSize:{ xs: '20px', md: '24px' }}}/>
        </NavLink>
        <NavLink to="/gaming" activeClassName="active" className="navbar__option" title='Gaming'>
         <SportsEsportsOutlinedIcon sx={{fontSize:{ xs: '20px', md: '24px' }}}  />

        </NavLink>
      </div>
      
      <div className="navbar__right">
      <div className="navbar__right--option">
           <AppsTwoToneIcon sx={{fontSize:{ xs: '20px', md: '24px' }}}/>
      </div>
      <div className="navbar__right--option">
      <ForumRoundedIcon sx={{fontSize:{ xs: '20px', md: '24px' }}}/> 
      </div>
      <div className="navbar__right--option">
      <NotificationsNoneOutlinedIcon sx={{fontSize:{ xs: '20px', md: '24px' }}}/>
      </div>
      <div className="navbar__right--option">
         <Avatar src={user.photoURL}/>
      </div>
      </div>

    </div>
  )
}

export default Navbar
