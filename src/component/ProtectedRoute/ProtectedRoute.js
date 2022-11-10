import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserInfoContext";

const ProtectedRoute = ({ children }) => {
	const { userInfo, loading } = useContext(UserContext);

	const location = useLocation();

	if (loading) {
		return (
			<div className="py-36">
				<div className="w-16 h-16 border-4 border-dashed mx-auto rounded-full animate-spin bg-black ">
					<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
				</div>
			</div>
		);
	}

	if (!userInfo) {
		return (
			<Navigate to="/SignIn" state={{ from: location }} replace></Navigate>
		);
	}
	return children;
};

export default ProtectedRoute;
