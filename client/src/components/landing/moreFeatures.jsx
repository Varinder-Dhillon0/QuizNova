import React from "react";

export default function MoreFeatures() {
	return (
		<>
			<div className="flex w-full p-32">
				<div className="w-6/12">
					<img
						src="https://assets.website-files.com/623865af2eee366912508587/627c3fc3bffc76f17c501cbd_Group%20892.svg"
						alt=""
					/>
				</div>
				<div className="w-6/12 flex flex-col font-Satoshi-Medium gap-10 px-5 py-16">
					<h1 className="text-6xl font-Satoshi-Bold">
						Manage{" "}
						<span className="font-Boska-BoldItalic">
							all your cards{" "}
						</span>
						in one place
					</h1>
					<p className="font-Satoshi-Regular text-xl">
						Centralize and simplify payments, and get comprehensive
						insights on your financials. Connect your bank account and
						your card to Milestone.
					</p>
					<div className="flex flex-col gap-5">
						<div className="flex text-xl gap-4">
							<img
								src="https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
								alt=""
							/>
							<p>No hidden fees.</p>
						</div>
						<div className="flex text-xl gap-4">
							<img
								src="https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
								alt=""
							/>
							<p>100% security. Guaranteed.</p>
						</div>
						<div className="flex text-xl gap-4">
							<img
								src="https://assets.website-files.com/623865af2eee366912508587/623b3326fcec4a5beb0c1e51_CheckCircle.svg"
								alt=""
							/>
							<p>No training or maintenance needed.</p>
						</div>
					</div>
				</div>
			</div>
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
		</>
	);
}
