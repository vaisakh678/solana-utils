import React from "react";

const Overview: React.FC = () => {
	return (
		<section className="my-6 rounded-md border border-separate overflow-hidden dark:bg-[#18181b]x bg-[#fafafa]x">
			<h2 className="text-xl py-4 px-4 md:px-6">Overview</h2>
			<div className="dark:bg-[#18181b] px-4 sm:px-6 bg-[#fafafa] rounded-t-xl">
				<div className="py-3 flex justify-between flex-col md:flex-row">
					<div>Address</div>
					<div className="text-sm">Bfqoeze6D3kivLpJPmebwwuCwBAVi22Eu32SU55PMm6U</div>
				</div>
				<div className="py-3 flex justify-between flex-col md:flex-row">
					<div>Balance (SOL)</div>
					<div className="text-sm">Bfqoeze6D3kivLpJPmebwwuCwBAVi22Eu32SU55PMm6U</div>
				</div>
				<div className="py-3 flex justify-between flex-col md:flex-row">
					<div>Allocated Data Size</div>
					<div className="text-sm">0 Bytes</div>
				</div>
				<div className="py-3 flex justify-between flex-col md:flex-row">
					<div>Assigned Program Id</div>
					<div className="text-sm">0 Bytes</div>
				</div>
				<div className="py-3 flex justify-between flex-col md:flex-row">
					<div>Executable</div>
					<div className="text-sm">0 Bytes</div>
				</div>
			</div>
		</section>
	);
};

export default Overview;
