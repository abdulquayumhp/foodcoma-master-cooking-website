import React, { useContext } from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserInfoContext";

const Header = () => {
	const { userInfo, UserLogOut } = useContext(UserContext);

	const handleLogOut = () => {
		UserLogOut().then().catch();
	};

	// console.log(userInfo);
	return (
		<div className="navbar bg-base-200 md:px-20">
			<div className="navbar-start">
				<Link className="text-xl md:text-3xl font-bold" to="/">
					<img
						className="w-48"
						src={
							"https://dcassetcdn.com/design_img/1535573/548829/548829_7740652_1535573_af163801_image.png"
						}
						alt=""
					/>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex ">
				<ul className="menu menu-horizontal p-0 ">
					<Link className="mr-5 text-1xl font-medium" to="/">
						home
					</Link>
					<Link className="mr-5 text-1xl font-medium" to="/myReview">
						My Review
					</Link>
					<Link className="mr-5 text-1xl font-medium" to="/addService">
						Add Service
					</Link>
					<Link className="mr-5 text-1xl font-medium" to="/about">
						About
					</Link>
				</ul>
			</div>
			<div className="navbar-end mr-5 md:mr-10">
				<div>
					{userInfo?.uid ? (
						<button onClick={handleLogOut} className="mr-5">
							SignOut
						</button>
					) : (
						<>
							<Link className="mr-2" to="/signIn">
								SignIn
							</Link>
							<Link className="mr-2" to="signUp">
								SignUp
							</Link>
						</>
					)}
				</div>
				<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
					<div className="w-10 rounded-full">
						<img
							className="object-cover"
							src={userInfo?.photoURL ? userInfo.photoURL : <FaUserAlt />}
						/>
					</div>
				</label>
			</div>
			<div className="dropdown">
				<label
					tabIndex={0}
					className="lg:hidden py-2 px-4 hover:text-blue-400 cursor-pointer">
					<FaBars className="text-2xl" />
				</label>
				<div className="text-center mx-auto ">
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box absolute top-0 right-0 w-screen pr-20 ease-in-out text-center mx-auto">
						<Link className="text-1xl font-medium mb-5" to="/">
							home
						</Link>
						<Link className="text-1xl font-medium mb-5" to="/myReview">
							My Review
						</Link>
						<Link className="text-1xl font-medium mb-5" to="/addService">
							Add Service
						</Link>
						<Link className="text-1xl font-medium mb-5" to="/about">
							About
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
