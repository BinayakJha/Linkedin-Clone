import React from 'react'
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import './Login.css'
function Login() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [profilePic, setProfilePic] = React.useState('');
    const dispatch = useDispatch();
    console.log(dispatch)
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        }
        )
        .catch(error => alert(error));
        
    };
    const register = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: authUser.user.email,
                    uid: authUser.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        })
        .catch((error) => alert(error));
    };
  return (
    <div className='login'>
        <div className="top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="" />
        </div>
        <form>
            <input 
            type="text" 
            placeholder="Full name (required if registering)" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            />
            <input 
            type="text" 
            placeholder="Profile pic URL (optional)" 
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
            />
            <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />


            <p>By clicking Agree & Join, you agree to the 
                <span className="login__register"> LinkedIn User Agreement</span>,
                <span className="login__register"> Privacy Policy</span>, and
                <span className="login__register"> Cookie Policy</span>.
            </p>

            
            <button type="submit" onClick={loginToApp}>Agree & Sign In</button>
            <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
        </form>
        
    </div>
  )
}

export default Login