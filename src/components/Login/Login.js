import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

            });
    }
    const handleSubmit = (e) => {
        console.log(loggedInUser.name);
        if (newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    updateUserName(loggedInUser.name);
                    // ..
                    // Signed in 
                    // var user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                    // ..
                });
        }
        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user);
                    // Signed in
                    // var user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then (function() {
            console.log("name updated");
        }).catch(function(error) {
            console.log(error);
        })
    }

    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (e.target.name === 'name') {
            const isName = e.target.value;
            isFormValid = isName;
        }
        if (isFormValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    return (
        <div>
            <h1>This is Login Page</h1>
            {/* <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign Up</button> */}



            <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Sign In</button>
            <br />
            <br />
            <b style={{ color: 'red' }}>or</b>
            <br />
            <br />
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign Up</label>
            <form className="container" onSubmit={handleSubmit}>
                {/* <p>Email : {loggedInUser.email} </p>
                <p>Name : {loggedInUser.name} </p>
                <p>Password : {loggedInUser.password} </p> */}
                <div class="form-group">
                    {newUser && <div>
                        <label for="exampleInputEmail1">Your Name</label>
                        <input name="name" class="form-control" onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                    </div>
                    }

                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" class="form-control" onBlur={handleBlur} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />

                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" class="form-control" onBlur={handleBlur} id="exampleInputPassword1" placeholder="Password" required />
                </div>

                <br />

                <button type="submit" class="btn btn-primary">{newUser ? 'Sign Up' : 'Sign In'}</button>
            </form>
            <br />
            <p style={{ color: 'red' }}>{loggedInUser.error}</p>
            {loggedInUser.success && <p style={{ color: 'Orange' }}>User {newUser ?    'Created' : 'logged In'}successfully</p>}

        </div>
    );
};

export default Login;