import React, { useContext } from "react";
import { UserContext } from "../Context/UserInfoContext";

const Home = () => {
	const { user } = useContext(UserContext);
	// console.log(user);
	return (
		<div>
			<h1>this is home</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
				asperiores, nesciunt ab alias ipsam nam rem provident, tempore officia
				nulla obcaecati ullam, aut necessitatibus voluptate quasi dignissimos
				praesentium beatae! Ex.
			</p>
		</div>
	);
};

export default Home;
