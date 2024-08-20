import React from "react";

function Page4() {
	return (
		<div className="flex w-full p-32">
			<div className="flex flex-col w-6/12 gap-10 px-5 py-16">
				<h1 className="font-Satoshi-Bold text-6xl">
					Pay invoices, <span className="font-Boska-BoldItalic">on time, every </span>time across
					borders
				</h1>
				<p className="font-Satoshi-Regular text-xl">
					Send and receive payments in any currency, without any extra
					charges, within 24 hours or less. Make international
					transactions a piece of cake.
				</p>
				<p className="font-Satoshi-Regular text-xl">
					Avoid late fees and penalties, and capture every early
					payment discount with reminders and automated approvals.
				</p>
				<div className="flex gap-4">
					<div className="bg-black rounded-full">
						<img
							src="https://assets.website-files.com/623865af2eee366912508587/6238747d9d3f5e4e5097b087_ArrowUpRight.svg"
							alt=""
						/>
					</div>

					<p className="font-Satoshi-Bold">LEARN MORE</p>
				</div>
			</div>
			<div className="w-6/12">
				<img
					src="https://assets.website-files.com/623865af2eee366912508587/627c4088c506c33633b42df6_Group%20891-p-800.png"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Page4;
