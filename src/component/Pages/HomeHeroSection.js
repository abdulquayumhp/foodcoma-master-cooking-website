import React from "react";
import { FaConciergeBell } from "react-icons/fa";

const HomeHeroSection = () => {
	return (
		<div className="flex flex-col md:flex-row">
			<div>
				<img
					className="object-cover border-slate-200 border-r-4 w-full h-full lg:w-[800px]"
					src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvb2tpbmd8ZW58MHx8MHx8&w=1000&q=80"
					alt=""
				/>
			</div>
			<div className=" md:w-[600px] bg-orange-400 border-slate-200 border-r-4">
				<div className="md:px-24 py-20 text-center  ">
					<FaConciergeBell className="text-3xl md:text-6xl text-center mx-auto" />
					<p className="text-3xl md:text-6xl text-black font-bold ">
						Cooking Is Good Habit
					</p>
					<p className="pt-20">
						Do yoy want to learn to cook? Cooking class will help you become a
						professional!
					</p>

					<img
						className="w-48 pt-20 mx-auto"
						src={
							"https://dcassetcdn.com/design_img/1535573/548829/548829_7740652_1535573_af163801_image.png"
						}
						alt=""
					/>
				</div>
			</div>
			<div className=" hidden lg:flex bg-red-300">
				<img
					className="h-full object-cover"
					src="https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					alt=""
				/>
			</div>
		</div>
	);
};

export default HomeHeroSection;
