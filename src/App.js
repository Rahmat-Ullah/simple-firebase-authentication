import React, { useEffect, useState } from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({})


  const handleGoogleSignIn = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedInUser);
      });
  }
  return (
    <div className="App">
      
      <form className="main_div" action="allcategories.html">
      <h2 className="title">Login Form</h2>
            <div class="input_box">
              <input type="text" id="username" placeholder="Username"></input>
              <div class="icon"><i class="fas fa-user"></i></div>
            </div>
            <div class="input_box">
                <input type="password" id="password" placeholder="Password"></input>
                <div class="icon"><i class="fas fa-lock"></i></div>
            </div>
            <div class="input_box button">
                <input type="submit" value="Login"></input>
            </div>
        </form>
      <button class="googlebtn" onClick={handleGoogleSignIn}>Login with google</button>
      <br />
      {
        user.email && <div>
          <h2>Welcome {user.name}</h2>
          {/* <h2>I know your email address: {user.email}</h2> */}
        </div>
      }
    </div>
  );
}

export default App;
