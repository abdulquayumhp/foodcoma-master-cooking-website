import React, { useContext } from "react";
import { UserContext } from "../Context/UserInfoContext";

const MyReview = () => {
	const { userInfo } = useContext(UserContext);
	console.log(userInfo);

	fetch("http://localhost:5000/myReview", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(userInfo),
	})
		.then(res => res.json())
		.then(data => console.log(data));

	return (
		<div>
			<h1>he</h1>
		</div>
	);
};

export default MyReview;
