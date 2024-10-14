import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const History: React.FC = () => {
	return (
		<section className="my-6 rounded-md border border-separate overflow-hidden dark:bg-[#18181b]x bg-[#fafafa]x">
			<h2 className="text-xl px-6 py-4">History</h2>
			<div className="dark:bg-[#18181b] bg-[#fafafa] rounded-t-xl overflow-auto">
				<Table className="overflow-auto">
					<TableCaption className="p-3">Transaction History</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="px-4 md:px-8">Transaction Signature</TableHead>
							<TableHead>Block</TableHead>
							<TableHead>Age</TableHead>
							<TableHead>Timestamp</TableHead>
							<TableHead className="px-4 md:px-8 text-center">Result</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array(14)
							.fill(0)
							.map((_, idx) => (
								<TableRow className="h-12" key={idx}>
									<TableCell className="font-medium px-4 md:px-8">2LqByvFqDKqsiUgChNiud2unBgJU5CpuX6NRhXib...</TableCell>
									<TableCell>332904996</TableCell>
									<TableCell className="text-nowrap">14 minutes ago</TableCell>
									<TableCell className="text-nowrap">Oct 14, 2024 at 16:46:32 UTC</TableCell>
									<TableCell className="text-center px-4 md:px-8">$250.00</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</div>
		</section>
	);
};

export default History;
