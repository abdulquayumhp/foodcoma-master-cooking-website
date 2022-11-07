import { Card } from "flowbite-react";
import React from "react";
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
							<img
								className="h-72 object-cover"
								src={allService.thumbnailPhoto}
								alt=""
							/>
							<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
								cook:{" "}
								<span className="text-gray-400 text-xl">
									{" "}
									{allService.cookName}
								</span>
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{allService.details}
							</p>
							<button className="bg-slate-50 hover:bg-slate-200 py-2">
								<Link>Details More</Link>
							</button>
						</Card>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllData;
