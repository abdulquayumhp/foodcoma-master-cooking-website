import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./component/Route/Routee/Route";

function App() {
	return (
		<div className="bg-slate-200">
			<RouterProvider router={route}></RouterProvider>
		</div>
	);
}

export default App;
