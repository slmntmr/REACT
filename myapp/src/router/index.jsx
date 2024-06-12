import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HelloWorld from "../components/01-hello/hello-world";
import HelloReact from "../components/01-hello/hello-react";

const router = createBrowserRouter([
	{
		path: "/about",
		element: <HelloWorld />,
	},
    {
		path: "/xyz",
		element: <HelloReact />,
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
