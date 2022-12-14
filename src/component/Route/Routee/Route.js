import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../LoginInfo/SignIn";
import SignUp from "../../LoginInfo/SignUp";
import About from "../../Pages/About";
import AddService from "../../Pages/AddService";
import AllData from "../../Pages/AllData";
import AllRevies from "../../Pages/AllRevies";
import DetailsCard from "../../Pages/DetailsCard";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import MyReview from "../../Pages/MyReview";
import Update from "../../Pages/Update";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";
import Main from "../Layout/Main";

export const route = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
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
				element: (
					<ProtectedRoute>
						<MyReview />
					</ProtectedRoute>
				),
			},

			{
				path: "/update/:id",
				element: <Update />,
				loader: ({ params }) =>
					fetch(`https://server-gray-tau.vercel.app/users/${params.id}`),
			},
			{
				path: "/addService",
				element: (
					<ProtectedRoute>
						<AddService />
					</ProtectedRoute>
				),
			},
			{
				path: "/allReview",
				element: <AllRevies />,
				loader: () => fetch("https://server-gray-tau.vercel.app/allReview"),
			},
			{
				path: "/allData",
				loader: () => fetch("https://server-gray-tau.vercel.app/serviceCard"),
				element: <AllData />,
			},
			{
				path: "/details/:id",
				loader: ({ params }) =>
					fetch(`https://server-gray-tau.vercel.app/details/${params.id}`),
				element: <DetailsCard />,
			},
		],
	},
]);
