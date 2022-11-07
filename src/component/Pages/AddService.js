import React from "react";

const AddService = () => {
	// const navigation = useNavigate();

	const handleNewCardSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const dishesName = form.dishesName.value;
		const cookName = form.cookName.value;
		const rating = form.rating.value;
		const thumbnailPhoto = form.thumbnailPhoto.value;
		const userPhoto = form.userPhoto.value;
		const details = form.details.value;

		fetch("https://server-gray-tau.vercel.app/service", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				dishesName,
				cookName,
				rating,
				thumbnailPhoto,
				userPhoto,
				details,
			}),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				form.reset();
				// navigation("/");
			})
			.catch(err => console.error(err));
	};
	return (
		<section className="h-full md:h-screen  bg-blue-200 dark:bg-gray-800 dark:text-gray-100 ">
			<div className=" flex  flex-col md:flex-row">
				<div className="w-[600px] h-full md:h-screen bg-blue-900   sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900"></div>
				<div>
					<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
						<form
							onSubmit={handleNewCardSubmit}
							action=""
							className=" flex flex-col mx-auto py-20 pl-20">
							<fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
								<div className="grid grid-cols-7 gap-4 col-span-full lg:col-span-3">
									<div className="col-span-full sm:col-span-4 ">
										<label htmlFor="name pb-1" className="text-sm">
											Dishes Name
										</label>
										<input
											type="text"
											placeholder="Dishes Name"
											required
											name="dishesName"
											className="w-full outline-none py-2 px-1 rounded-md "
										/>
									</div>
									<div className="col-span-full sm:col-span-3 ">
										<label htmlFor="thumbNailUrl" className="text-sm">
											Cook Name
										</label>
										<input
											type="text"
											name="cookName"
											required
											placeholder="Last name"
											className="w-full outline-none py-2 px-1 rounded-md "
										/>
									</div>
									<div className="col-span-full sm:col-span-4 ">
										<label htmlFor="" className="text-sm">
											Recipe Name
										</label>
										<input
											type="text"
											name="recipeName"
											required
											placeholder="recipeName"
											className="w-full outline-none py-2 px-1 rounded-md "
										/>
									</div>
									<div className="col-span-full sm:col-span-3">
										<label htmlFor="photoUrl" className="text-sm">
											Rating
										</label>
										<input
											type="text"
											name="rating"
											required
											placeholder="Give Rating"
											className="w-full outline-none py-2 px-1 rounded-md "
										/>
									</div>

									<div className="col-span-full">
										<label htmlFor="" className="text-sm">
											Thumbnail Photo
										</label>
										<input
											id="address"
											name="thumbnailPhoto"
											type="text"
											required
											placeholder="Thumbnail Photo"
											className="w-full outline-none py-2 px-1 rounded-md "
										/>
									</div>
									<div className="col-span-full">
										<label htmlFor="address" className="text-sm">
											User Photo
										</label>
										<input
											id="address"
											type="text"
											required
											placeholder="User Photo"
											name="userPhoto"
											className="w-full outline-none py-2 px-1 rounded-md "
										/>
									</div>
									<div className="col-span-full">
										<label required htmlFor="address" className="text-sm">
											Details
										</label>

										<textarea
											className="w-full outline-none py-2 px-6 rounded-md "
											id=""
											placeholder="Cook Description"
											name="details"
											rows="4"
											cols="50"></textarea>
									</div>
								</div>
								<input
									className="bg-white col-span-full py-2 pr-4 -mr-6 "
									type="submit"
									value="Submit Your Cooking"
								/>
							</fieldset>
						</form>
					</section>
				</div>
			</div>
		</section>
	);
};

export default AddService;
