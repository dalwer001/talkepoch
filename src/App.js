import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser,logout } from './features/counter/userSlice';
import Login from './login';
import TalkMessage from './TalkMessage';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
          })
        );

      }else{
        dispatch(logout());
<<<<<<< HEAD
=======

>>>>>>> 877ae53a71211151e2dfc77189404932272063f3
      }

    });
  },[])
<<<<<<< HEAD
  return (
    <div className="App">
      {user ? <TalkMessage/> : <Login/> }
=======








  return (
    <div className="App">
      {user ? <TalkMessage/> :<Login/> }

>>>>>>> 877ae53a71211151e2dfc77189404932272063f3


    </div>
  );
}

export default App;
