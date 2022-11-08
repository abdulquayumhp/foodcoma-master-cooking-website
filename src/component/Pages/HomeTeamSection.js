import React from "react";

const HomeTeamSection = () => {
	return (
		<div>
			<section className="py-6 dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
					<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
						Our Shape
					</h1>
					<p className="max-w-2xl text-center dark:text-gray-400">
						while a chef is 'a skilled and trained cook who works in a hotel or
						restaurant'. These definitions imply that a chef is a type of cook,
					</p>
					<div className="flex flex-row flex-wrap-reverse justify-center">
						<div className="flex flex-col justify-center m-8 text-center">
							<img
								alt=""
								className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center object-cover bg-cover rounded-full dark:bg-gray-500"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCrL82CmGvXvozp90r_gc7q3wSpoh3c-KlQ&usqp=CAU"
							/>
							<p className="text-xl font-semibold leading-tight">
								Leroy Jenkins
							</p>
							<p className="dark:text-gray-400">Executive Chef</p>
						</div>
						<div className="flex flex-col justify-center m-8 text-center">
							<img
								alt=""
								className="self-center flex-shrink-0 w-24 h-24 object-cover mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM957jT530LYhmIG17ToZaLAz6KmveeGA55w&usqp=CAU"
							/>
							<p className="text-xl font-semibold leading-tight">
								Leroy Jenkins
							</p>
							<p className="dark:text-gray-400">Senior Chef</p>
						</div>
						<div className="flex flex-col justify-center m-8 text-center">
							<img
								alt=""
								className="self-center object-cover flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LyswMlxlX-fPne22vTC9q3iiIi6AlzCVpw&usqp=CAU"
							/>
							<p className="text-xl font-semibold leading-tight">
								Leroy Jenkins
							</p>
							<p className="dark:text-gray-400">Sous Chef</p>
						</div>
						<div className="flex flex-col justify-center m-8 text-center">
							<img
								alt=""
								className=" self-center object-cover flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiPVtCYQqXNIYrGK4_HL4qs9hmLMC-Ut5AA&usqp=CAU"
							/>
							<p className="text-xl font-semibold leading-tight">
								Leroy Jenkins
							</p>
							<p className="dark:text-gray-400">Senior Pastry Chef</p>
						</div>
						<div className="flex flex-col justify-center m-8 text-center">
							<img
								alt=""
								className="
								object-cover self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-i5cHkfNkR_NI3hl73llJeqkbBCNCA09m-w&usqp=CAU"
							/>
							<p className="text-xl font-semibold leading-tight">
								Leroy Jenkins
							</p>
							<p className="dark:text-gray-400">Pastry Chef</p>
						</div>
						<div className="flex flex-col justify-center m-8 text-center">
							<img
								alt=""
								className="object-cover self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIjNQ7AqcLP1DwfaY_rgyJLLZ7QEhz1TyaA&usqp=CAU"
							/>
							<p className="text-xl font-semibold leading-tight">
								Leroy Jenkins
							</p>
							<p className="dark:text-gray-400">Commis Chef</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomeTeamSection;
