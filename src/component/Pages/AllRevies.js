import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import AllReviewsCard from "./AllReviewsCard";

const AllRevies = () => {
	useTitle("All Review");
	const allReview = useLoaderData();
	// console.log(allReview);
	const { data } = allReview;
	console.log(data);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 w-9/12 mx-auto">
			{data.map(ReviewCard => (
				<AllReviewsCard key={ReviewCard._id} ReviewCard={ReviewCard} />
			))}
		</div>
	);
};

export default AllRevies;
