import React from "react";
import { NavLink } from "react-router-dom";

const Appbar: React.FC = () => {
	return (
		<div className="bg-slate-200 h-14 px-4 flex items-center md:px-16 justify-between">
			<h3 className="text-lg font-medium">SOL Utils</h3>
			<section>
				<NavLink to="airdrop">{({ isActive }) => <p className={"hover:underline " + (isActive ? "underline" : "")}>Airdrop</p>}</NavLink>
			</section>
		</div>
	);
};

export default Appbar;
