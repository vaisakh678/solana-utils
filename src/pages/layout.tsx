import { Outlet } from "react-router-dom";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const Layout = () => {
	return (
		<div className="min-h-svh">
			<Appbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
