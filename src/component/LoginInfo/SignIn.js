import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { UserContext } from "../Context/UserInfoContext";

const SignIn = () => {
	useTitle("Sign In");

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";

	const { getLoginInfo, GoogleUserAdd, gitHubLogin } = useContext(UserContext);
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState({
		general: "",
	});
	// console.log(error);

	const handleUserSubmitSion = e => {
		e.preventDefault();
		const name = e.target.name.value;
		getLoginInfo(userInfo.email, userInfo.password)
			.then(result => {
				const user = result.user;

				const currentUser = {
					email: user.email,
				};
				fetch(" https://food-masty-server.vercel.app/jwt", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(currentUser),
				})
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("recipe-token", data.token);
						navigate(from, { replace: true });
						Swal.fire({
							position: "top-center",
							icon: "success",
							title: "Log in successfully",
							showConfirmButton: false,
							timer: 1500,
						});
					});
			})
			.catch(error => {
				// console.log(error);

				setError({ ...error, general: error.message });
			});
	};

	const userEmailSubmit = e => {
		const email = e.target.value;
		setUserInfo({ ...userInfo, email: e.target.value });
	};
	const userPasswordSubmit = e => {
		const password = e.target.value;
		setUserInfo({ ...userInfo, password: e.target.value });
	};
	const handleGoogleSignIn = () => {
		// console.log("us");
		GoogleUserAdd()
			.then(result => {
				const user = result.user;

				const currentUser = {
					email: user.email,
				};
				fetch(" https://food-masty-server.vercel.app/jwt", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(currentUser),
				})
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("recipe-token", data.token);
						navigate(from, { replace: true });
						Swal.fire({
							position: "top-center",
							icon: "success",
							title: "Log in successfully",
							showConfirmButton: false,
							timer: 1500,
						});
					});
			})
			.catch(error => console.error(error));
	};
	const handleGitHubSignIn = () => {
		console.log("us");
		gitHubLogin()
			.then(result => {
				const user = result.user;

				const currentUser = {
					email: user.email,
				};
				fetch(" https://food-masty-server.vercel.app/jwt", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(currentUser),
				})
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("recipe-token", data.token);
						navigate(from, { replace: true });
						Swal.fire({
							position: "top-center",
							icon: "success",
							title: "Log in successfully",
							showConfirmButton: false,
							timer: 1500,
						});
					});
			})
			.catch(error => console.error(error));
	};
	return (
		<div className="flex md:w-9/12 flex-col mx-auto justify-center items-center md:flex-row pb-10 h-screen">
			<div>
				<img
					className=" object-cover"
					src="https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png"
					alt=""
				/>
			</div>
			<div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100 mt-20">
				<h2 className="text-slate-600 mb-3 text-3xl font-semibold text-center">
					Login your account
				</h2>
				<div className="flex items-center w-full my-4">
					<hr className="w-full dark:text-gray-400" />
					<p className="px-3 dark:text-gray-400">OR</p>
					<hr className="w-full dark:text-gray-400" />
				</div>

				<div className="my-6 space-y-4">
					<div className="flex gap-5">
						<button
							onClick={handleGoogleSignIn}
							aria-label="Login with Google"
							type="button"
							className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1
					bg-white
					hover:bg-slate-100
					dark:border-gray-400 focus:ring-violet-400">
							<FaGoogle />
							<p>Google</p>
						</button>
						<button
							onClick={handleGitHubSignIn}
							aria-label="Login with GitHub"
							role="button"
							className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 
					bg-white 
					hover:bg-slate-100 dark:border-gray-400 focus:ring-violet-400">
							<FaGithub />
							<p>GitHub</p>
						</button>
					</div>
					<div className="flex gap-5">
						<button
							aria-label="Login with Twitter"
							role="button"
							className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1
					bg-white
					hover:bg-slate-100
					dark:border-gray-400 focus:ring-violet-400">
							<FaTwitter />
							<p>Twitter</p>
						</button>
						<button
							aria-label="Login with Twitter"
							role="button"
							className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1
					bg-white
					hover:bg-slate-100
					dark:border-gray-400 focus:ring-violet-400">
							<FaFacebook />
							<p>FaceBook</p>
						</button>
					</div>
				</div>
				<div className="flex items-center w-full my-4">
					<hr className="w-full dark:text-gray-400" />
					<p className="px-3 dark:text-gray-400">OR</p>
					<hr className="w-full dark:text-gray-400" />
				</div>
				<form onSubmit={handleUserSubmitSion} className="space-y-8 ">
					<div className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm">
								Email address
							</label>
							<input
								type="email"
								name="email"
								onChange={userEmailSubmit}
								placeholder="email"
								className="outline-none w-full px-3 border-none py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>

						<div className="space-y-2">
							<div className="flex justify-between">
								<label htmlFor="password" className="text-sm">
									Password
								</label>
								<Link
									to="/logIn"
									className="text-xs hover:underline dark:text-gray-400">
									Forgot password?
								</Link>
							</div>
							<input
								onChange={userPasswordSubmit}
								type="password"
								name="password"
								id="password"
								placeholder="password"
								className="w-full border-none outline-none px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
					</div>
					<p className="text-sm text-center dark:text-gray-400">
						Already have an account?
						<Link to="/signUp" className="focus:underline hover:underline">
							SignUp
						</Link>
					</p>
					{error.general ? (
						<p className="text-red-400">
							Login Prob... {error.general} &#10006;
						</p>
					) : (
						""
					)}
					<input
						className="w-full px-8 py-3 font-semibold rounded-md 
					bg-white
					hover:bg-slate-100
					dark:bg-violet-400 dark:text-gray-900"
						type="submit"
						value="SignIn"
					/>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
