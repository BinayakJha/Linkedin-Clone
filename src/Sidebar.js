import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import './Sidebar.css';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://media.licdn.com/dms/image/C5616AQEGt-xhSVx7hA/profile-displaybackgroundimage-shrink_350_1400/0/1640758033150?e=1683763200&v=beta&t=SLjqFs_O8Dt6vHs9FD5I3sGfEY9g8eMnCsazSy2r5Yo" alt="" className='imagetop' />
           {auth.currentUser.photoURL ? (
                <img src={auth.currentUser.photoURL} alt="" className='sidebar__avatar' />
            ) : ( 
                <Avatar className='sidebar__avatar' />
            )}

            
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>
                    Who viewed you
                </p>
                <p className="sidebar__statNumber">
                    2,543
                </p>
            </div>
            <div className="sidebar__stat">
                <p>
                    Views on post
                </p>
                <p className="sidebar__statNumber">
                    2,448
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar