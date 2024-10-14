import React, { useEffect } from "react";
import Content from "../../components/Content";
import { Input } from "@/components/ui/input";
import { PublicKey } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { Separator } from "../../components/ui/separator";
import Overview from "./components/Overview";

const Explorer: React.FC = () => {
	const { connection } = useConnection();

	useEffect(() => {
		(async () => {
			const publicKey = new PublicKey("Bfqoeze6D3kivLpJPmebwwuCwBAVi22Eu32SU55PMm6U");
			const res = await connection.getAccountInfo(publicKey);
			console.log(res);
		})();
	}, [connection]);

	return (
		<Content className="fade-in" key={"explorer"}>
			<Input placeholder="Search for blocks, accounts, transactions, programs and tokens" className="py-5" />
			<Separator className="w-full mt-8" />
			<Overview />
		</Content>
	);
};

export default Explorer;
