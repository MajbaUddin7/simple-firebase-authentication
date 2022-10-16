import './App.css';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth();

function App() {

  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      })
  }

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  }
  return (
    <div className="App">
      {/* condition ? true: false */}

      {user.uid ?
        <button onClick={handleSingOut}>Sing Out</button>
        :
        <div className="">
          <button onClick={handleGoogleSingIn}>Google Sing In</button>
          <button onClick={handleGithubSingIn}>Github Sing IN</button>
        </div>

      }
      {user.uid && <div className="">
        <h3>User Name: {user.displayName}</h3>
        <p>Email address: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
