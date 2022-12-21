import { Card } from "flowbite-react";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";

const AllData = () => {
	const allServices = useLoaderData();
	// console.log(allServices);

	const { data } = allServices;
	console.log(data);
	return (
		<div className="md:w-9/12 mx-auto py-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{data.map(allService => (
				<div className="">
					<div className="max-w-sm mx-auto">
						<Card>
							<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
								Dish:{" "}
								<span className="text-gray-400 text-xl">
									{" "}
									{allService.dishesName}
								</span>
							</h5>
							<PhotoProvider className="">
								<PhotoView className="" src={allService.thumbnailPhoto}>
									<img
										className="h-72 object-cover"
										src={allService.thumbnailPhoto}
										alt=""
									/>
								</PhotoView>
							</PhotoProvider>
							<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
								cook:{" "}
								<span className="text-gray-400 text-xl">
									{" "}
									{allService.cookName}
								</span>
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{allService.details
									? allService.details.slice(0, 100) + "....."
									: "N/A"}
							</p>
							<div className="flex justify-between items-center ">
								<h1>{allService.rating}</h1>
								<Link
									to={`/details/${allService._id}`}
									className="hover:bg-gray-200 p-2">
									<HiArrowRight className="text-gray-600 hover:text-slate-400 hover:bg-gray-200 " />
								</Link>
							</div>
						</Card>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllData;
