import { Avatar, Card } from "flowbite-react";
import React, { useContext } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
import { UserContext } from "../Context/UserInfoContext";
import SingelReview from "./SingelReview";

const DetailsCard = () => {
	const submit = () => {
		Swal.fire("Good job!", "", "success");
	};

	useTitle("Card Details");
	const { userInfo } = useContext(UserContext);
	console.log(userInfo);
	const detailsCard = useLoaderData();
	const {
		cookName,
		details,
		dishesName,
		rating,
		thumbnailPhoto,
		userPhoto,
		_id,
	} = detailsCard;
	console.log(thumbnailPhoto);

	const handleReviewSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const name = form.name.value;
		const photoUrl = form.photoUrl.value;
		const rating = form.rating.value;
		const shortText = form.shortText.value;
		const detailsReview = form.detailsReview.value;
		// console.log(email, name, photoUrl, rating, shortText, details);

		fetch("https://server-gray-tau.vercel.app/review", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email,
				name,
				photoUrl,
				rating,
				shortText,
				detailsReview,
				detailsCard,
				cookName,
				details,
				dishesName,
				rating,
				thumbnailPhoto,
				userPhoto,
			}),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
			})
			.catch(error => console.error(error));
	};

	return (
		<div>
			<div className="flex items-center flex-col lg:flex-row">
				<div className="w-full md:w-[800px] mx-auto py-20 ">
					<Card className="md:w-[800px] ">
						<div className="flex justify-between items-center flex-wrap">
							<div className="flex items-center  ">
								<div className="w-24  ">
									<Avatar img={userPhoto} className="" size="rounded" />
								</div>
								<div className="pl-10">
									<p className="text-xl text-gray-400">Cook : {cookName}</p>
									<p className="text-xl text-gray-400">
										{" "}
										Dish Name : {dishesName}
									</p>
								</div>
							</div>
							<p className="text-xl text-gray-400"> Rating: {rating}</p>
						</div>
						<img
							className="object-cover w-full md:w-[800px] h-[400px] "
							src={thumbnailPhoto}
							alt=""
						/>
						<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{dishesName}
						</h5>
						<p className="font-normal text-gray-700 dark:text-gray-400">
							{details}
						</p>
					</Card>
				</div>
				<div>
					{userInfo?.uid ? (
						<div className="bg-white text-black">
							<form onSubmit={handleReviewSubmit}>
								<h1 className="text-center text-2xl font-bold pt-10 ">
									Review
								</h1>
								<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
									<div className="space-y-2 col-span-full lg:col-span-1 text-center md:text-left">
										<p className="font-medium">Profile</p>

										<label for="bio" className="text-sm">
											User Photo
										</label>

										<img
											src={userInfo?.photoURL}
											alt=""
											className="w-10 h-10 rounded-full border-slate-300 border-2 mx-auto md:mx-0"
										/>
									</div>

									<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
										<div className="col-span-full sm:col-span-3">
											<label for="username" className="text-sm">
												User Email
											</label>
											<input
												type="email"
												required
												placeholder="email"
												defaultValue={userInfo?.email}
												readOnly
												name="email"
												className="w-full rounded-md "
											/>
										</div>
										<div className="col-span-full sm:col-span-3">
											<label for="website" className="text-sm">
												User Name
											</label>
											<input
												type="text"
												defaultValue={userInfo?.displayName}
												readOnly
												required
												name="name"
												placeholder="name"
												className="w-full rounded-md "
											/>
										</div>
										<div className="col-span-full ">
											<label for="website" className="text-sm">
												User Photo Url
											</label>
											<input
												type="text"
												defaultValue={userInfo?.photoURL}
												name="photoUrl"
												readOnly
												required
												placeholder="name"
												className="w-full rounded-md "
											/>
										</div>
										<div className="col-span-full sm:col-span-3">
											<label for="website" className="text-sm">
												Rating
											</label>
											<input
												type="text"
												required
												name="rating"
												placeholder="give Your Rating"
												className="w-full rounded-md "
											/>
										</div>
										<div className="col-span-full sm:col-span-3">
											<label for="website" className="text-sm">
												Short Text
											</label>
											<input
												type="text"
												required
												name="shortText"
												placeholder="short Text"
												className="w-full rounded-md "
											/>
										</div>
										<div className="col-span-full">
											<label for="bio" className="text-sm">
												Details
											</label>
											<textarea
												id="bio"
												placeholder="Say Something"
												required
												name="detailsReview"
												className="w-full rounded-md "></textarea>
										</div>
									</div>
									<input
										onClick={submit}
										className="bg-slate-200 hover:bg-slate-400 cursor-pointer col-span-full py-2 pr-4  "
										type="submit"
										value="Submit Your Cooking"
									/>
								</fieldset>
							</form>
						</div>
					) : (
						<div className="ml-96 mr-96">
							<h1>please first you want to login</h1>
							<Link to="/signIn"> SignIn</Link>
						</div>
					)}
				</div>
			</div>
			<div>
				<SingelReview dishesName={dishesName} />
			</div>
		</div>
	);
};

export default DetailsCard;
