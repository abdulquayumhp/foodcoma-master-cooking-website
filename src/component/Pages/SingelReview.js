import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const SingelReview = ({ dishesName }) => {
	// console.log(cookName);
	const [review, setReview] = useState([]);
	// console.log(review);
	useEffect(() => {
		fetch(`https://server-gray-tau.vercel.app/Singelreview/${dishesName}`)
			.then(res => res.json())
			.then(result => {
				// console.log(result);
				const reviewData = result.filter(
					data => data.dishesName === dishesName
				);
				// console.log(reviewData);
				setReview(reviewData);
			});
	}, [dishesName, review]);
	return (
		<div className="">
			{review.length === 0 && (
				<h1 className="text-center text-red-500 pt-16">
					No Review Found for this food !
				</h1>
			)}
			{review.length > 0 && (
				<div className="border border-gray-500 rounded  ">
					<h1 className="text-center  font-bold text-xl  pb-3">
						All Review is Here
					</h1>

					<div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 py-10  ">
						{review.map(rev => (
							<div className="max-w-sm mx-auto">
								<Card>
									<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
										Dish:{" "}
										<span className="text-gray-400 text-xl">
											{" "}
											{rev.dishesName}
										</span>
									</h5>
									<img
										className="h-36  object-cover"
										src={rev.thumbnailPhoto}
										alt=""
									/>
									<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
										cook:{" "}
										<span className="text-gray-400 text-xl">
											{" "}
											{rev.cookName}
										</span>
									</h5>
									<p className="font-normal text-gray-700 dark:text-gray-400">
										{rev.details ? rev.details.slice(0, 50) + "....." : "N/A"}
									</p>
								</Card>

								<div className="max-w-md p-8  bg-white ">
									<h1 className="text-center text-xl pb-5 font-bold">
										Reviewer Information
									</h1>
									<div className=" w-full mb-6 h-44   ">
										<img
											src={rev.photoUrl}
											alt=""
											className="object-cover object-center w-full h-36 rounded dark:bg-gray-500"
										/>
									</div>
									<div className="flex flex-col space-y-4">
										<div>
											<div className="flex justify-between items-center">
												<h2 className="text-xl font-semibold">
													Name : {rev.name}
												</h2>
												<span className="dark:text-gray-400 flex justify-center items-center">
													<FaStar className="m-2 " />
													{rev.rating}
												</span>
											</div>
											<span className="text-sm dark:text-gray-400">
												email : {rev.email}
											</span>
										</div>
										<div className="space-y-1">
											<span className="flex items-center space-x-2">
												{/* icon  */}
												<span className="dark:text-gray-400">
													{" "}
													{rev.shortText}
												</span>
											</span>
											<span>{rev.detailsReview}</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SingelReview;
