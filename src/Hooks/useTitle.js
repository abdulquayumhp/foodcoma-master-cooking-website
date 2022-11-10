import { useEffect } from "react";

const useTitle = title => {
	useEffect(() => {
		document.title = `${title} - Food Coma`;
	}, [title]);
};

export default useTitle;
