import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../FirebaseAuth/AuthFirebaseUser";

export const UserContext = createContext();

const auth = getAuth(app);

const UserInfoContext = ({ children }) => {
	const [userInfo, setUserInfo] = useState(null);
	const user = { name: "hello" };

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const getLoginInfo = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = profile => {
		return updateProfile(auth.currentUser, profile);
	};

	const UserLogOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUserInfo(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const userInformation = {
		user,
		createUser,
		getLoginInfo,
		userInfo,
		updateUserProfile,
		UserLogOut,
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
