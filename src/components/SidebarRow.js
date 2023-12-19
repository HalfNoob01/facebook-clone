import { Avatar } from '@mui/material'
import React from 'react'
import "../styles/SidebarRow.css"
function SidebarRow({src,Icon,title}) {
  return (
    <div className='sidebarRow'>
         {src && <Avatar className='avatar' src={src}/>}
         {Icon && <Icon className="Icon"  Icon={Icon}/>}
         <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
