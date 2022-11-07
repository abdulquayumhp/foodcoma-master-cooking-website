import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ serviceCard }) => {
	// console.log(serviceCard);
	const { dishesName, cookName, details, rating, thumbnailPhoto, userPhoto } =
		serviceCard;
	return (
		<div className="max-w-sm mx-auto">
			<Card>
				<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
					Dish: <span className="text-gray-400 text-xl"> {dishesName}</span>
				</h5>
				<img className="h-72 object-cover" src={thumbnailPhoto} alt="" />
				<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
					cook: <span className="text-gray-400 text-xl"> {cookName}</span>
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					{details ? details.slice(0, 50) + "....." : "N/A"}
				</p>
				<button className="bg-slate-50 hover:bg-slate-200 py-2">
					<Link>Details More</Link>
				</button>
			</Card>
		</div>
	);
};

export default HomeCard;
