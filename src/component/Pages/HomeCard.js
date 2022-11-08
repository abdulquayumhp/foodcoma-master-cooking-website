import { Card } from "flowbite-react";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HomeCard = ({ serviceCard }) => {
	// console.log(serviceCard);
	const {
		dishesName,
		cookName,
		details,
		rating,
		thumbnailPhoto,
		userPhoto,
		_id,
	} = serviceCard;
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
				<div className="flex justify-between items-center ">
					<h1>{rating}</h1>
					<Link to={`/details/${_id}`} className="hover:bg-gray-200 p-2">
						<HiArrowRight className="text-gray-600 hover:text-slate-400 hover:bg-gray-200 " />
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default HomeCard;
