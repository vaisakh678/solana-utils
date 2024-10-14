import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";
import Airdrop from "./pages/Airdrop";
import Explorer from "./pages/Explorer";
import Launchpad from "./pages/Launchpad";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Navigate to="explorer" />,
			},
			{
				index: true,
				path: "explorer",
				element: <Explorer />,
			},
			{
				index: true,
				path: "launchpad",
				element: <Launchpad />,
			},
			{
				index: true,
				path: "airdrop",
				element: <Airdrop />,
			},
		],
	},
]);

const AppRouter: React.FC = () => {
	return <RouterProvider router={routes} />;
};

export default AppRouter;
