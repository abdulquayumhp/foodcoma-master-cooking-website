import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserInfoContext from "./component/Context/UserInfoContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserInfoContext>
			<App />
		</UserInfoContext>
	</React.StrictMode>
);
