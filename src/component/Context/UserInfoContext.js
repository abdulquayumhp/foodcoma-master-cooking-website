import {
	createUserWithEmailAndPassword,
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../FirebaseAuth/AuthFirebaseUser";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const UserContext = createContext();

const auth = getAuth(app);

const UserInfoContext = ({ children }) => {
	const [userInfo, setUserInfo] = useState(null);
	const [loading, setLoading] = useState(true);
	// const user = { name: "hello" };

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const getLoginInfo = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = profile => {
		setLoading(true);
		return updateProfile(auth.currentUser, profile);
	};

	const GoogleUserAdd = () => {
		return signInWithPopup(auth, googleProvider);
	};
	const gitHubLogin = () => {
		// setLoading(true);
		return signInWithPopup(auth, gitHubProvider);
	};

	const UserLogOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUserInfo(currentUser);
			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const userInformation = {
		createUser,
		getLoginInfo,
		userInfo,
		updateUserProfile,
		UserLogOut,
		GoogleUserAdd,
		gitHubLogin,
		loading,
		setLoading,
	};
	return (
		<div>
			<UserContext.Provider value={userInformation}>
				{children}
			</UserContext.Provider>
		</div>
	);
};

export default UserInfoContext;
