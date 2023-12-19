import React, { useEffect,useState } from 'react'
import "../styles/Marketplace.css"
import SettingsIcon from "@mui/icons-material/Settings";
import { SearchOutlined } from '@mui/icons-material';
import StoreIcon from '@mui/icons-material/Store';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SellIcon from '@mui/icons-material/Sell';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Marketplace() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollingElement = document.querySelector('.scrolling');
    scrollingElement.addEventListener('scroll', () => {
      setIsScrolled(scrollingElement.scrollTop > 0);
    });
  }, []);

  return (
    <div className='marketplace'>
       <div className="marketplace__left">
           <div className="marketplace__left-top" style={isScrolled ? { borderBottom: '1px solid rgba(0, 0, 0, 0.333)' } : {}}>
             <div className="marketplace__left-top1"> 
             <h2>Gaming</h2>
          <div className="setting">
            <SettingsIcon />
          </div>
             </div>
            <div className="Mtextarea"  >
              <SearchOutlined style={{marginLeft:"5px",opacity:0.5}}/>
              <input type="text" placeholder='Search Marketplace' />
            </div>
            </div>
            <div className="scrolling">

              <div className="scrolling__option" style={{backgroundColor:" rgb(242, 238, 245)"}}>
                <div className="scrolling__option-icon" style={{backgroundColor:"#7b7ded"}}>
                  <StoreIcon fontSize='small' style={{color:"white"}}/>
                </div>
                <h4>Brouse all</h4>
              </div>
              <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <NotificationsIcon fontSize='small'/>
                </div>
                <h4>Notifications</h4>
              </div>
              <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <AllInboxIcon fontSize='small'/>
                </div>
                <h4>Inbox</h4>
              </div>
              <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <ShoppingBasketIcon fontSize='small'/>
                </div>
                <h4>Buying</h4>  <ArrowForwardIosIcon opacity="0.4" style={{marginLeft:"230px",marginTop:"5px"}} fontSize='small'/>
              </div>
              <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <SellIcon fontSize='small'/> 
                </div>
                <h4>Selling</h4> <ArrowForwardIosIcon opacity="0.4" fontSize='small' style={{marginLeft:"230px",marginTop:"5px"}}/>
              </div>
              <div className="scrolling__option" style={{height:"40px",borderRadius:"10px",marginTop:"5px"}}>
                  <button style={{width:"360px",height:"40px",color:"blue",borderRadius:"10px",fontSize:"medium" ,outline:"none",border:"none"}}>+ Creaing new listing</button>
              </div>
               
               <div className="filters">
                <h4 style={{marginLeft:"10px"}}>Filters</h4>
                <div className="scrolling__option" style={{color:"blue",height:"30px",marginTop:"10px",marginBottom:"10px"}}>
                       <h4 style={{color:"blue",height:"20px"}}>Dhanbad- within 65 kilometers</h4>
                </div>
               </div>

               <h4 style={{fontSize:"medium",fontWeight:"600"}}>Categories</h4>
               <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <AllInboxIcon fontSize='small'/>
                </div>
                <h4>Inbox</h4>
              </div>
               <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <AllInboxIcon fontSize='small'/>
                </div>
                <h4>Inbox</h4>
              </div>
               <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <AllInboxIcon fontSize='small'/>
                </div>
                <h4>Inbox</h4>
              </div>
               <div className="scrolling__option">
                <div className="scrolling__option-icon">
                  <AllInboxIcon fontSize='small'/>
                </div>
                <h4>Inbox</h4>
              </div>
               <div className="scrolling__option" style={{backgroundColor:"inherit",cursor:"none"}}>
                <div className="scrolling__option-icon" style={{backgroundColor:"inherit"}}>
                 
                </div>
              
              </div>
               
            </div>      
       </div>

       <div className="marketplace__right">


       </div>
    </div>
  )
}

export default Marketplace
