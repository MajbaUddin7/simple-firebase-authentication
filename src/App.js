import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth();

function App() {

  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
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
  return (
    <div className="App">
      {/* condition ? true: false */}

      {user.email ?
        <button onClick={handleSingOut}>Sing Out</button>
        :
        <button onClick={handleGoogleSingIn}>Google Sing In</button>
      }
      {user.email && <div className="">
        <h3>User Name: {user.displayName}</h3>
        <p>Email address: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
