import React from "react";
import { Separator } from "./ui/separator";
import GithubIcon from "../assets/github.svg";
import GithubDarkIcon from "../assets/github-dark.svg";

const Footer: React.FC = () => (
	<div className="h-14 px-4 lg:px-20 xl:px-44">
		<Separator />
		<div className="w-full h-full flex items-center">
			<div className="w-5 h-5 relative">
				<img src={GithubIcon} alt="github" className="absolute w-full h-fuw-full opacity-100 dark:opacity-0 transition-opacity" />
				<img src={GithubDarkIcon} alt="github" className="absolute w-full h-fuw-full opacity-0 dark:opacity-100 transition-opacity" />
			</div>
			<a className="flex ml-1.5 hover:underline" href="https://github.com/vaisakh678" target="_blank">
				vaisakh678
			</a>
		</div>
	</div>
);

export default Footer;
