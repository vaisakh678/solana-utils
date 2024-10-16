import React from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import SolanaIcon from "../assets/solana.svg";
import RPCSelector from "./RPCSelector";
import ThemeSwitcher from "./ThemeSwitcher";

const Appbar: React.FC = () => {
	return (
		<div className="h-14">
			<div className="h-14 flex items-center px-4 lg:px-20 xl:px-44 transition-[padding] justify-between fixed w-full top-0 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
				<Link to="/explorer" className="flex items-center gap-2">
					<img src={SolanaIcon} className="w-5 h-5" alt="solana" />
					<h3 className="text-lg font-medium hidden md:flex">SOL Utils</h3>
				</Link>
				<section className="flex items-center gap-4">
					<NavLink to="explorer">
						{({ isActive }) => <p className={cn("font-normal opacity-60 hover:opacity-100", isActive ? "opacity-100" : "")}>Explorer</p>}
					</NavLink>
					<NavLink to="launchpad">
						{({ isActive }) => <p className={cn("font-normal opacity-60 hover:opacity-100", isActive ? "opacity-100" : "")}>Launchpad</p>}
					</NavLink>
					<NavLink to="airdrop" className="lg:mr-8">
						{({ isActive }) => <p className={cn("font-normal opacity-60 hover:opacity-100", isActive ? "opacity-100" : "")}>Airdrop</p>}
					</NavLink>
					<RPCSelector />
					<div className="hidden sm:flex">
						<WalletMultiButton style={{ height: 36 }}></WalletMultiButton>
					</div>
					<ThemeSwitcher />
				</section>
			</div>
		</div>
	);
};

export default Appbar;
