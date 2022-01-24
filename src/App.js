import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import IMessage from './components/IMessage/IMessage';
import Login from './components/Login/Login';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase';

function App() {
const user = useSelector(selectUser) //userSlice
const dispatch = useDispatch(); //whenever we need to add sthg in the data layer, we need to use dispatch

useEffect(() => {
  onAuthStateChanged((auth), authUser => {  //when auth change occurs, use authUser
    if (authUser) {
      //user is logged in
      dispatch(login({
        //passing payload
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName,

      }))
    } else {
      //user is logged out
      dispatch(logout())
    }
  })
}, [user] )

  return (
    <div className="App">
      {/* if youre logged in, if the user exists, */}
      {user ? 
        <IMessage/>
      : 
        <Login />
      }

    </div>
  );
}

export default App;
