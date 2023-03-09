import React, { useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
import { auth, db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
function Feed() {
    const [input, setInput] = React.useState('');
    /* A hook that is used to store the posts in the state. */
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: auth.currentUser.displayName,
            description: auth.currentUser.email,
            message: input,
            photoUrl: auth.currentUser.photoURL || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            
        })

        setInput('');
    }
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            {/* add profile pic  */}
            <div className="boxxx">
                <img  src={auth.currentUser.photoURL} alt="" />
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={PhotoSizeSelectActualOutlinedIcon} title="Photo" color="#378fe9" />
                <InputOption Icon={SmartDisplayIcon} title="Video" color="#5f9b41" />
                <InputOption Icon={EventIcon} title="Event" color="#c37d16" />
                <InputOption Icon={NewspaperIcon} title="Write article" color="#e16745" />
            </div>
        </div>

        {/* Post */}
        <FlipMove>
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
        </FlipMove>
        
    </div>
  )
}

export default Feed