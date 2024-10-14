import React from "react";
import Content from "../../components/Content";
import { Input } from "@/components/ui/input";

const Explorer: React.FC = () => {
	return (
		<Content>
			<Input placeholder="Search for blocks, accounts, transactions, programs and tokens" className="py-5" />
		</Content>
	);
};

export default Explorer;
