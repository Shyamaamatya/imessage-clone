import React from 'react'
import "./style.css"
import logo from "../../Images/logo.png"
import {auth, provider} from "../../firebase"
import { signInWithPopup } from 'firebase/auth'

 const Login = () => {
    // const [error, setError] = useState('');

    const signIn = () => {
        signInWithPopup(auth, provider).then((response) => console.log(response)).catch((error) => alert(error.message));

    }

    // const signIn = async (e) => {
    //     e.preventDefault();
        
    //     try {
    //         await signInWithPopup();

    //     } catch (err){
    //         setError(err.message)
            
    //     }
    // }

    // const handleSignIn = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await signIn();
    //     }catch (err) {
    //         setError(err.message);
    //     }

    // }

    
    return (
        <div className='login'>
            <div className='login-logo'>
                <img src={logo} 
                alt='logo' 
                />
                <h1> iMessage </h1>
            </div>

            <button onClick={signIn} >Sign In</button>
            
        </div>
    )
}

export default Login;
