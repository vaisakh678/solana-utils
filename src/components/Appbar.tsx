import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "../lib/utils";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const RPCSelector = () => {
	return (
		<Select>
			<SelectTrigger className="w-[160px]">
				<SelectValue placeholder="Mainnet" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem className="cursor-pointer" value="mainnet">
					Mainnet
				</SelectItem>
				<SelectItem className="cursor-pointer" value="devnet">
					Devnet
				</SelectItem>
				<SelectItem className="cursor-pointer" value="testnet">
					Testnet
				</SelectItem>
				<SelectItem className="cursor-pointer" value="custom">
					Custom RPC URL
				</SelectItem>
			</SelectContent>
		</Select>
	);
};

const Appbar: React.FC = () => {
	return (
		<div className="h-14 px-4 flex items-center lg:px-20 xl:px-44 justify-between sticky w-auto top-0 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Link to="/explorer">
				<h3 className="text-lg font-medium">SOL Utils</h3>
			</Link>
			<section className="flex items-center gap-4">
				<NavLink to="explorer">
					{({ isActive }) => <p className={cn("font-normal opacity-60 hover:opacity-100", isActive ? "opacity-100" : "")}>Explorer</p>}
				</NavLink>
				<NavLink to="airdrop" className="mr-8">
					{({ isActive }) => <p className={cn("font-normal opacity-60 hover:opacity-100", isActive ? "opacity-100" : "")}>Airdrop</p>}
				</NavLink>
				<RPCSelector />
				<WalletMultiButton style={{ height: 40 }}></WalletMultiButton>
			</section>
		</div>
	);
};

export default Appbar;
