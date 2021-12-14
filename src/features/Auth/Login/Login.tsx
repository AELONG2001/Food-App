// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { authActions, UserInfo } from '../AuthSlice';

// Configure Firebase.
const config = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
	signInFlow: 'popup',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
	],
};

function LoginPage() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

	// Listen to the Firebase Auth state and set the local state.
	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
			setIsSignedIn(!!user);
			if (user) {
				navigate('/');
				const currentUser = firebase.auth().currentUser;
				console.log('User login');
				// const userInfo = {
				// 	id: currentUser!.uid,
				// 	name: currentUser!.displayName,
				// 	email: currentUser!.email,
				// 	img: currentUser!.photoURL,
				// };
				// dispatch(authActions.getUserInfo(userInfo as UserInfo));
				dispatch(authActions.checkLogin(isSignedIn));

				if (user !== null) {
					localStorage.setItem('UserName', currentUser!.displayName as string);
					localStorage.setItem('UserAvatar', currentUser!.photoURL as string);
				}
			} else {
				console.log('User is not login');
			}
		});
		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
	}, []);

	if (!isSignedIn) {
		return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
	}

	return <div></div>;
}

export default LoginPage;
