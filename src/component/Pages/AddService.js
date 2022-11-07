import React from "react";

const AddService = () => {
	return (
		<section className="h-screen  bg-blue-200 dark:bg-gray-800 dark:text-gray-100 ">
			<div className=" flex mx-auto  lg:grid-cols-2 xl:grid-cols-5">
				<div className=" w-[600px] h-screen bg-blue-900  mx-auto  sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900"></div>
				<div>
					<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
						<form
							action=""
							className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
							<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
								<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
									<div className="col-span-full sm:col-span-3">
										<label for="name pb-1" className="text-sm">
											Dishes Name
										</label>
										<input
											type="text"
											placeholder="Dishes Name"
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-3">
										<label for="thumbNailUrl" className="text-sm">
											Thumbnail Photo
										</label>
										<input
											type="text"
											name="thumbnailPhoto"
											placeholder="Last name"
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-3">
										<label for="userPhoto" className="text-sm">
											User Photo
										</label>
										<input
											type="text"
											name="userPhoto"
											placeholder="Last name"
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-3">
										<label for="photoUrl" className="text-sm">
											Photo
										</label>
										<input
											type="text"
											placeholder="Last name"
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-3">
										<label for="email" className="text-sm">
											Email
										</label>
										<input
											id="email"
											type="email"
											placeholder="Email"
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-3">
										<label for="email" className="text-sm">
											Email
										</label>
										<input
											id="email"
											type="email"
											placeholder="Email"
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full">
										<label for="address" className="text-sm">
											Address
										</label>
										<input
											id="address"
											type="text"
											placeholder=""
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full">
										<label for="address" className="text-sm">
											Address
										</label>
										<input
											id="address"
											type="text"
											placeholder=""
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full">
										<label for="address" className="text-sm">
											Address
										</label>
										<input
											id="address"
											type="text"
											placeholder=""
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-2">
										<label for="city" className="text-sm">
											City
										</label>
										<input
											id="city"
											type="text"
											placeholder=""
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-2">
										<label for="state" className="text-sm">
											State / Province
										</label>
										<input
											id="state"
											type="text"
											placeholder=""
											className="w-full py-2 px-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full sm:col-span-2">
										<label for="zip" className="text-sm">
											ZIP / Postal
										</label>
										<input
											id="zip"
											type="text"
											placeholder=""
											className="w-full py-2 px-1  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
								</div>
							</fieldset>
						</form>
					</section>
				</div>
			</div>
		</section>
	);
};

export default AddService;
