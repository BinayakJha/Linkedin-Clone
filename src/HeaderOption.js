import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'

function HeaderOption({avatar,Icon, title, onClick}) {
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && ( <img className='headerOption__icon b-50' src={avatar} alt="" /> )}
        {/* if there is no avatar then keep a default image */}
        {!avatar && !Icon && <Avatar className = 'headerOption__icon'/>}
        <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption