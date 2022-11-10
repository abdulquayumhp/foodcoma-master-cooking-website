import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../LoginInfo/SignIn";
import SignUp from "../../LoginInfo/SignUp";
import About from "../../Pages/About";
import AddService from "../../Pages/AddService";
import AllData from "../../Pages/AllData";
import AllRevies from "../../Pages/AllRevies";
import DetailsCard from "../../Pages/DetailsCard";
import Home from "../../Pages/Home";
import MyReview from "../../Pages/MyReview";
import Update from "../../Pages/Update";
import Main from "../Layout/Main";

export const route = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/signIn",
				element: <SignIn />,
			},
			{
				path: "/signUp",
				element: <SignUp />,
			},
			{
				path: "/myReview",
				element: <MyReview />,
			},

			{
				path: "/update/:id",
				element: <Update />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/users/${params.id}`),
			},
			{
				path: "/addService",
				element: <AddService />,
			},
			{
				path: "/allReview",
				element: <AllRevies />,
				loader: () => fetch("http://localhost:5000/allReview"),
			},
			{
				path: "/allData",
				loader: () => fetch("https://server-gray-tau.vercel.app/serviceCard"),
				element: <AllData />,
			},
			{
				path: "/details/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
				element: <DetailsCard />,
			},
		],
	},
]);
