import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { Separator } from "./ui/separator";
import { CircleCheckBig } from "lucide-react";

interface CustomRPCInputProps {
	isOpen?: boolean;
	onOpenChange?: (flag: boolean) => void;
}

type RPCTypes = "Mainnet" | "Devnet" | "Testnet" | "Custom RPC URL";
interface RPC {
	RPCUrl: string;
	RPCName: RPCTypes;
}

const RPCS: RPC[] = [
	{ RPCName: "Mainnet", RPCUrl: "https://api.mainnet-beta.solana.com" },
	{ RPCName: "Devnet", RPCUrl: "https://api.devnet.solana.com" },
	{ RPCName: "Testnet", RPCUrl: "https://api.testnet.solana.com" },
	{ RPCName: "Custom RPC URL", RPCUrl: "http://localhost:8899" },
];

const RPCSelector: React.FC<CustomRPCInputProps> = ({ isOpen, onOpenChange }) => {
	const [rpcName, setRpcName] = useState<RPCTypes>(RPCS[0].RPCName);
	const [rpcUrl, setRpcUrl] = useState(RPCS[0].RPCUrl);

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				<Button variant="outline">
					<CircleCheckBig className="w-4 h-4 mr-2" />
					{rpcName}
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[350px] w-full">
				<DialogHeader className="mb-4">
					<DialogTitle className="text-xl">Choose a Clustor</DialogTitle>
					<DialogDescription className="">This will set the rpc for further actions!.</DialogDescription>
				</DialogHeader>
				<section className="flex flex-col gap-4">
					{RPCS.map((item, idx) => (
						<Button
							key={idx}
							onClick={() => {
								setRpcName(item.RPCName);
								setRpcUrl(item.RPCUrl);
							}}
							className={cn("p-5", item.RPCName === rpcName ? "bg-primary-foreground" : null)}
							variant="outline"
						>
							{item.RPCName}
						</Button>
					))}
					{rpcName === "Custom RPC URL" ? (
						<>
							<Separator />
							<Input className="p-5" value={rpcUrl} onChange={(e) => setRpcUrl(e.target.value)} />
						</>
					) : null}
				</section>
			</DialogContent>
		</Dialog>
	);
};

export default RPCSelector;
