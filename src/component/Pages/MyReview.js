import { Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { UserContext } from "../Context/UserInfoContext";

const MyReview = () => {
	useTitle("My Review");
	const { userInfo, loading, setLoading } = useContext(UserContext);

	const [reviewData, setReviewData] = useState([]);

	console.log("xx", reviewData);

	useEffect(() => {
		fetch(
			` https://server-gray-tau.vercel.app/myReviews?email=${userInfo?.email}`
		)
			.then(res => {
				res.json();
			})
			.then(data => console.log(data));
	}, []);

	useEffect(() => {
		fetch(`https://server-gray-tau.vercel.app/myReviews`)
			.then(res => res.json())
			.then(data => setReviewData(data))
			.catch(err => console.log(err));
	}, [loading]);

	const handleDelate = id => {
		console.log(id);
		fetch(`https://server-gray-tau.vercel.app/delateReview/${id}`, {
			method: "DELETE",
		})
			.then(res => res.json())
			.then(data => {
				Swal.fire(
					"Good job!",
					"Thank you to purchase our courses! You will get a email on this email as soon as possible",
					"success"
				);
				if (data.deletedCount > 0) {
					const remaining = reviewData.filter(card => card._id !== id);
					setReviewData(remaining);
				}
			});
	};

	// console.log(AllReviews);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-9/12 mx-auto py-20 gap-5">
			{reviewData.map(reviews => (
				<div>
					<div className="max-w-sm mx-auto">
						<Card>
							<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
								Dish:{" "}
								<span className="text-gray-400 text-xl">
									{" "}
									{reviews.dishesName}
								</span>
							</h5>
							<img
								className="h-36  object-cover"
								src={reviews.thumbnailPhoto}
								alt=""
							/>
							<h5 className=" font-bold text-xl tracking-tight text-gray-500 dark:text-white">
								cook:{" "}
								<span className="text-gray-400 text-xl">
									{" "}
									{reviews.cookName}
								</span>
							</h5>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{reviews.details
									? reviews.details.slice(0, 50) + "....."
									: "N/A"}
							</p>
						</Card>
						<div className="max-w-md p-8  bg-white ">
							<h1 className="text-center text-xl pb-5 font-bold">
								Reviewer Information
							</h1>
							<div className=" w-full mb-6 h-44   ">
								<img
									src={reviews.photoUrl}
									alt=""
									className="object-cover object-center w-full h-36 rounded dark:bg-gray-500"
								/>
							</div>
							<div className="flex flex-col space-y-4">
								<div>
									<div className="flex justify-between items-center">
										<h2 className="text-xl font-semibold">
											Name : {reviews.name}
										</h2>
										<span className="dark:text-gray-400 flex justify-center items-center">
											<FaStar className="m-2 " />
											{reviews.rating}
										</span>
									</div>
									<span className="text-sm dark:text-gray-400">
										email : {reviews.email}
									</span>
								</div>
								<div className="space-y-1">
									<span className="flex items-center space-x-2">
										<span className="dark:text-gray-400">
											{" "}
											{reviews.shortText}
										</span>
									</span>
									<span>{reviews.detailsReview}</span>
								</div>
							</div>
							<div className="flex justify-between items-center py-2">
								<div className="hover:bg-gray-200 p-2">
									<FaTrash
										onClick={() => handleDelate(reviews._id)}
										className="text-gray-600 hover:text-slate-400 hover:bg-gray-200 cursor-pointer"
									/>
								</div>
								<div className="hover:bg-gray-200 p-2">
									<Link
										to={`/update/${reviews._id}`}
										className="cursor-pointer">
										Update
									</Link>
								</div>
							</div>
						</div>
					</div>{" "}
				</div>
			))}
		</div>
	);
};

export default MyReview;
