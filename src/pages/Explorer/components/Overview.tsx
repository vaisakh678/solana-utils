import React from "react";

const Overview: React.FC = () => {
	return (
		<section className="my-6 rounded-md border border-separate dark:bg-[#18181b]x bg-[#fafafa]x">
			<h2 className="text-xl px-6 py-4">Overview</h2>
			<div className="dark:bg-[#18181b] bg-[#fafafa] rounded-xl">
				<div className="px-6 py-3 flex justify-between flex-col md:flex-row">
					<div>Address</div>
					<div className="text-sm">Bfqoeze6D3kivLpJPmebwwuCwBAVi22Eu32SU55PMm6U</div>
				</div>
				<div className="px-6 py-3 flex justify-between flex-col md:flex-row">
					<div>Balance (SOL)</div>
					<div className="text-sm">Bfqoeze6D3kivLpJPmebwwuCwBAVi22Eu32SU55PMm6U</div>
				</div>
				<div className="px-6 py-3 flex justify-between flex-col md:flex-row">
					<div>Allocated Data Size</div>
					<div className="text-sm">0 Bytes</div>
				</div>
				<div className="px-6 py-3 flex justify-between flex-col md:flex-row">
					<div>Assigned Program Id</div>
					<div className="text-sm">0 Bytes</div>
				</div>
				<div className="px-6 py-3 flex justify-between flex-col md:flex-row">
					<div>Executable</div>
					<div className="text-sm">0 Bytes</div>
				</div>
			</div>
		</section>
	);
};

export default Overview;
