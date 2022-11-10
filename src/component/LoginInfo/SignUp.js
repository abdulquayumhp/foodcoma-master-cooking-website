import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { UserContext } from "../Context/UserInfoContext";

const SignUp = () => {
	useTitle("SignUp");
	const { createUser, updateUserProfile } = useContext(UserContext);
	// console.log(createUser);

	const [userInfo, setUserInfo] = useState({
		name: "",
		url: "",
		email: "",
		password: "",
	});
	// console.log(userInfo);
	const [error, setError] = useState({
		name: "",
		url: "",
		email: "",
		password: "",
		general: "",
	});

	const handleUserSubmitSion = e => {
		e.preventDefault();
		const name = e.target.name.value;

		createUser(userInfo.email, userInfo.password)
			.then(update => {
				console.log(update.user);
				handleUpdateUserProfile(userInfo.name, userInfo.url);
				userInfo.reset("");
			})

			.catch(err => {
				console.log(err);
				setError({ ...error, general: error.message });
			});
		// console.log("hello", name);
	};
	const handleUpdateUserProfile = (name, photoUrl) => {
		const profileUser = {
			displayName: name,
			photoURL: photoUrl,
		};

		updateUserProfile(profileUser)
			.then(() => {})
			.catch(error => console.error(error));
	};

	const userNameSubmit = e => {
		const name = e.target.value;
		if (/\b[a-zA-Z]\s/.test(name)) {
			setError({
				...error,
				name: <p>&#10006; please provide a valid information </p>,
			});
			setUserInfo({ ...userInfo, name: "" });
		} else {
			setError({ ...error, name: <p>&#10004; all good</p> });
			setUserInfo({ ...userInfo, name: e.target.value });
		}
	};

	const userUrlSubmit = e => {
		const url = e.target.value;
		// if (/b[a-zA-Z]/.test(url)) {
		// 	setError({
		// 		...error,
		// 		url: <p>&#10006; please provide a valid information </p>,
		// 	});
		// 	setUserInfo({ ...userInfo, url: "" });
		// } else {
		// 	setError({ ...error, url: <p>&#10004; all good</p> });
		// 	setUserInfo({ ...userInfo, url: e.target.value });
		// }
		setUserInfo({ ...userInfo, url: e.target.value });
	};
	const userEmailSubmit = e => {
		const email = e.target.value;

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setError({
				...error,
				email: (
					<p className="text-red-400">&#10006; please provide a valid email</p>
				),
			});
			setUserInfo({ ...userInfo, email: "" });
		} else {
			setError({ ...error, email: <p>&#10004; all good</p> });
			setUserInfo({ ...userInfo, email: e.target.value });
		}
	};
	const userPasswordSubmit = e => {
		const password = e.target.value;

		const lengthError = password.length < 6;
		const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);

		const noCapitalLetterError = !/[A-Z]{1,}/.test(password);

		if (lengthError) {
			setError({
				...error,
				password: (
					<p className="text-red-400">&#10006; Must be at least 6 characters</p>
				),
			});
			setUserInfo({ ...userInfo, password: "" });
		} else if (noSymbolError) {
			setError({
				...error,
				password: (
					<p className="text-red-400">
						&#10006; Must be at least 1 spacial symbol
					</p>
				),
			});
			setUserInfo({ ...userInfo, password: "" });
		} else if (noCapitalLetterError) {
			setError({
				...error,
				password: (
					<p className="text-red-400">
						&#10006; Must be at least 1 Capital Letter
					</p>
				),
			});
			setUserInfo({ ...userInfo, password: "" });
		} else {
			setError({ ...error, password: <p>&#10004; all good</p> });
			setUserInfo({ ...userInfo, password: e.target.value });
		}
	};
	return (
		<div className="flex md:w-9/12 flex-col mx-auto justify-center items-center md:flex-row pb-10 h-screen">
			<div className="mr-36">
				<img
					className=" object-cover"
					src="https://matlensilver.com/wp-content/uploads/2021/06/Build-a-Workforce2.gif"
					alt=""
				/>
			</div>
			<div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
				<h2 className="text-slate-600 mb-3 text-3xl font-semibold text-center">
					SignUp your account
				</h2>

				<div className="flex items-center w-full my-4">
					<hr className="w-full dark:text-gray-400" />
				</div>
				<form onSubmit={handleUserSubmitSion} className="space-y-8 ">
					<div className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm">
								Full Name
							</label>
							<input
								onChange={userNameSubmit}
								type="text"
								name="name"
								placeholder="email"
								className="border-none  outline-none w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
						{<p>{error.name}</p>}
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm">
								Image Url
							</label>
							<input
								type="text"
								onChange={userUrlSubmit}
								name="imageUrl"
								placeholder="Enter Your Email Url"
								className="outline-none w-full border-none  px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
						{<p>{error.url}</p>}

						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm">
								Email address
							</label>
							<input
								type="email"
								name="email"
								onChange={userEmailSubmit}
								placeholder="email"
								className="outline-none w-full border-none  px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
						{error.email && <p>{error.email}</p>}
						<div className="space-y-2">
							<div className="flex justify-between">
								<label htmlFor="password" className="text-sm">
									Password
								</label>
							</div>
							<input
								onChange={userPasswordSubmit}
								type="password"
								name="password"
								id="password"
								placeholder="password"
								className="w-full outline-none px-3 py-2 border border-none  rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
						{error.password && <p>{error.password} </p>}
					</div>
					<p className="text-sm text-center dark:text-gray-400">
						Don't have an account?
						<Link to="/signIn" className="focus:underline hover:underline">
							Sign up here
						</Link>
					</p>
					<input
						className="w-full px-8 py-3 font-semibold rounded-md 
                        bg-white
                        hover:bg-slate-100
                        dark:bg-violet-400 dark:text-gray-900"
						type="submit"
						value="SignUp"
					/>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
