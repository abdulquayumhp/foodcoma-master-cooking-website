import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../LoginInfo/SignIn";
import SignUp from "../../LoginInfo/SignUp";
import About from "../../Pages/About";
import AddService from "../../Pages/AddService";
import AllData from "../../Pages/AllData";
import Home from "../../Pages/Home";
import MyReview from "../../Pages/MyReview";
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
				path: "/addService",
				element: <AddService />,
			},
			{
				path: "/allData",
				loader: () => fetch("http://localhost:5000/serviceCard"),
				element: <AllData />,
			},
		],
	},
]);
