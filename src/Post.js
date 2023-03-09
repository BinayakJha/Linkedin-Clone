import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Post.css';



const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            {/* if there is no photoUrl then keep a default image */}
            {photoUrl ? (
                <img src = {photoUrl} alt="" className='post__avatar' />
            ) : (
                <Avatar className = 'post__avatar' />
            )}

            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
        
    </div>
  )
})

export default Post