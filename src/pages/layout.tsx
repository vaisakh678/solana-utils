import { Outlet } from "react-router-dom";
import Appbar from "../components/ui/Appbar";

const Layout = () => {
	return (
		<div className="min-h-svh">
			<Appbar />
			<Outlet />
		</div>
	);
};

export default Layout;
