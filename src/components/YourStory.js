import React from 'react'
import "../styles/YourStory.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
function YourStory({image,profilePic,title}) {
  return (
    <div className='yourStory'>
       <div className="background" style={{backgroundImage:`url(${image})`}}></div>
       <div className="Ycontent"> 
        <AddCircleIcon className='plusIcon' fontSize='large' />
        <h4>{title}</h4>
       </div>

    </div>
  )
}

export default YourStory
