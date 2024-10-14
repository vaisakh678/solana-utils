import React from "react";
import { Separator } from "./ui/separator";

const Footer: React.FC = () => {
	return (
		<div className="h-14 px-4 lg:px-20 xl:px-44 bg-blue-500x">
			<Separator />
			<div className="w-full h-full flex items-center">
				This is a off project by{" "}
				<a className="font-medium flex ml-1.5" href="https://github.com/vaisakh678">
					Vaisakh
				</a>
			</div>
		</div>
	);
};

export default Footer;
