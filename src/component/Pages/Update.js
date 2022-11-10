import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../Context/UserInfoContext";

const Update = () => {
	const users = useLoaderData();
	console.log(users);
	const { userInfo } = useContext(UserContext);

	const handleReviewSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const name = form.name.value;
		const photoUrl = form.photoUrl.value;
		const rating = form.rating.value;
		const shortText = form.shortText.value;
		const detailsReview = form.detailsReview.value;
		console.log(email, name, photoUrl, rating, shortText, detailsReview);
		fetch(`http://localhost:5000/users/${users._id}`, {
			method: "PUT",
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
			}),
		})
			.then(res => res.json())
			.then(data => {});
	};

	const submit = () => {
		Swal.fire(
			"Good job!",
			"Thank you to purchase our courses! You will get a email on this email as soon as possible",
			"success"
		);
	};
	return (
		<div className="bg-white text-black">
			<form onSubmit={handleReviewSubmit}>
				<h1 className="text-center text-2xl font-bold pt-10 ">Review</h1>
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
								defaultValue={users.rating}
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
								defaultValue={users.shortText}
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
								defaultValue={users.detailsReview}
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
	);
};

export default Update;
