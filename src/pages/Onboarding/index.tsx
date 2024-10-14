import React from "react";
import LightSSImage from "../../assets/images/dark-ss.png";
import { Button } from "../../components/ui/button";
import GithubIcon from "../../assets/github-dark.svg";
import { useNavigate } from "react-router-dom";

const Onboarding: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-svh flex items-center flex-col pb-48">
			<div className="my-48">
				<h1 className="font-normal text-6xl text-center leading-[70px]">
					Solana Utilities
					<br />
					for the Web
				</h1>
				<div className="mt-12 flex items-center justify-center gap-4">
					<Button onClick={() => navigate("/")} className="p-4">
						Get started
					</Button>
					<Button
						className="p-4"
						variant="outline"
						onClick={() => {
							window.location.href = "https://github.com/vaisakh678/solana-utils";
						}}
					>
						<img src={GithubIcon} alt="git" className="mr-3" />
						Github
					</Button>
				</div>
			</div>
			<div className="w-[700px] rounded-xl border overflow-hidden hover:translate-y-1 transition-all pt-2">
				<img src={LightSSImage} alt="img" className="bg-cover" />
			</div>
		</div>
	);
};

export default Onboarding;
