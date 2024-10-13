import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";
import Airdrop from "./pages/Airdrop";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
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
