import React from "react";
import { FaHouseDamage } from "react-icons/fa";

const HomeSectionFreeCamp = () => {
	return (
		<div className="flex flex-col lg:flex-row ">
			<div className="f-full lg:w-[805px] bg-orange-400 text-center py-24 border-white border-r-4">
				<p className="font-semibold"> Become a Master Chef</p>
				<h1 className="text-4xl font-bold pb-8">
					Our Free Camp Will Be Start Soon
				</h1>
				<FaHouseDamage className="mx-auto text-5xl " />
				<div className="md:px-10 text-center">
					<p className="pt-10 font-semibold">
						Culinarians are required to have knowledge of food science,
						nutrition and diet and are responsible for preparing meals that are
						as pleasing to the eye as well as to the palate.{" "}
					</p>
					<p className="pt-10 font-semibold">
						After restaurants, their primary places of work include
						delicatessens and relatively large institutions
					</p>
				</div>
			</div>

			<div>
				<img
					className="object-cover border-slate-200 border-r-4 lg:w-[1110px] w-full  h-full md:h-[600px]  "
					src="https://images.unsplash.com/photo-1556911220-dabc1f02913a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt=""
				/>
			</div>
		</div>
	);
};

export default HomeSectionFreeCamp;
