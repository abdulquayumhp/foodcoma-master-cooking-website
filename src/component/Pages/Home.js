import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserInfoContext";
import HomeCard from "./HomeCard";

const Home = () => {
	const { user } = useContext(UserContext);
	const [serviceCards, setServiceCards] = useState([]);

	useEffect(() => {
		fetch("https://server-gray-tau.vercel.app/servicesCardLimit")
			.then(res => res.json())
			.then(data => {
				// console.log(data.data);
				setServiceCards(data.data);
			});
	}, []);
	// console.log(serviceCards);

	// console.log(user);
	return (
		<div>
			<div className=" py-20  lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3  ">
				{serviceCards.map(serviceCard => (
					<HomeCard key={serviceCard._id} serviceCard={serviceCard} />
				))}
			</div>
			<div className="pb-20 w-full text-center">
				<button className="bg-white text-black py-2 px-36 hover:bg-slate-100 mx-auto ">
					<Link to="/allData">All Service</Link>
				</button>
			</div>
		</div>
	);
};

export default Home;
