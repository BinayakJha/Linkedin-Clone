import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { auth } from './firebase';


function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img 
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt="" 
            />

            <div className="header__search">
                {/* Search Icon */}
                <SearchIcon />
                <input type="text" name="" id="" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption 
            avatar={auth.currentUser.photoURL}
            title='Me'
            />
            <HeaderOption Icon={ExitToAppIcon} title='Logout' onClick={() => auth.signOut()} />


        </div>
    </div>
  )
}

export default Header