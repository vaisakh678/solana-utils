import React from "react";
import { Separator } from "./ui/separator";
import GithubIcon from "../assets/github.svg";

const Footer: React.FC = () => (
	<div className="h-14 px-4 lg:px-20 xl:px-44">
		<Separator />
		<div className="w-full h-full flex items-center">
			<img src={GithubIcon} alt="github" className="w-5 h-5" />
			<a className="flex ml-1.5 hover:underline" href="https://github.com/vaisakh678" target="_blank">
				vaisakh678
			</a>
		</div>
	</div>
);

export default Footer;
