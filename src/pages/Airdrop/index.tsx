import React, { useState } from "react";
import Content from "../../components/Content";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { toast } from "sonner";
import { PublicKey, SolanaJSONRPCError } from "@solana/web3.js";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import { Label } from "../../components/ui/label";

const Airdrop: React.FC = () => {
	const wallet = useWallet();
	const { connection } = useConnection();
	const [sol, setSol] = useState(1);
	const [pubKey, setPubKey] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleRequestAirdrop = async () => {
		if (pubKey.length !== 44) {
			toast.warning("Invalid public key!.");
			return;
		}
		const pkey = new PublicKey(pubKey);
		if (pkey.toBase58() !== pubKey) {
			toast.warning("Invalid public key!.");
			return;
		}

		const airdrop_sol = Number(sol);
		const res = connection.requestAirdrop(pkey, airdrop_sol * 1e9);
		toast.promise(res, { loading: "Loading..." });

		setIsLoading(true);
		res.then((res) => {
			toast.success("Airdrop successfull", { description: "Transaction Signature: " + res });
		})
			.catch((err: SolanaJSONRPCError) => {
				toast.error("Airdrop Failed", { description: err.message || "Something went wrong!." });
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Content className="flex items-center justify-center fade-in" key={"airdrop"}>
			<fieldset className="w-[400px] h-[250px] flex flex-col gap-4 group" disabled={isLoading}>
				<h1 className="">Note: This tool does not give you real $SOL or Solana tokens</h1>
				<Input placeholder="Public key" onChange={(e) => setPubKey(e.target.value)} value={pubKey} />
				<div className="flex items-center gap-3">
					<Switch id="wallet-address" disabled={!wallet.publicKey} />
					<Label htmlFor="wallet-address" className="cursor-pointer text-sm opacity-80">
						User wallet address
					</Label>
				</div>
				<div className="flex flex-col sm:flex-row gap-4">
					<Input
						placeholder="Sol"
						className="w-[100px]"
						type="number"
						value={sol}
						onChange={(e) => {
							setSol(+e.target.value);
						}}
					/>
					<Button className="w-full relative" onClick={handleRequestAirdrop}>
						<p className="opacity-100 group-disabled:opacity-0 absolute">Request for Airdrop</p>
						<ReloadIcon className="absolute opacity-0 group-disabled:opacity-100 animate-spin" />
					</Button>
				</div>
			</fieldset>
		</Content>
	);
};

export default Airdrop;
