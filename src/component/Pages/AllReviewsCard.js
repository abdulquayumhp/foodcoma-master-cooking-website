import { Card } from "flowbite-react";
import React from "react";
import { FaStar } from "react-icons/fa";

const AllReviewsCard = ({ ReviewCard }) => {
	console.log(ReviewCard);
	const {
		_id,
		cookName,
		details,
		dishesName,
		rating,
		thumbnailPhoto,
		userPhoto,
		email,
		name,
		photoUrl,
		detailsReview,
		shortText,
	} = ReviewCard;
	return (
		<div className="max-w-sm mx-auto">
			<Card>
				<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
					Dish: <span className="text-gray-400 text-xl"> {dishesName}</span>
				</h5>
				<img className="h-36  object-cover" src={thumbnailPhoto} alt="" />
				<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
					cook: <span className="text-gray-400 text-xl"> {cookName}</span>
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					{details ? details.slice(0, 50) + "....." : "N/A"}
				</p>
			</Card>

			<div className="max-w-md p-8  bg-white ">
				<h1 className="text-center text-xl pb-5 font-bold">
					Reviewer Information
				</h1>
				<div className=" w-full mb-6 h-44   ">
					<img
						src={photoUrl}
						alt=""
						className="object-cover object-center w-full h-36 rounded dark:bg-gray-500"
					/>
				</div>
				<div className="flex flex-col space-y-4">
					<div>
						<div className="flex justify-between items-center">
							<h2 className="text-xl font-semibold">Name : {name}</h2>
							<span className="dark:text-gray-400 flex justify-center items-center">
								<FaStar className="m-2 " />
								{rating}
							</span>
						</div>
						<span className="text-sm dark:text-gray-400">email : {email}</span>
					</div>
					<div className="space-y-1">
						<span className="flex items-center space-x-2">
							{/* icon  */}
							<span className="dark:text-gray-400"> {shortText}</span>
						</span>
						<span>{detailsReview}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllReviewsCard;
