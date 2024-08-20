import React from "react";

function Page3() {
	return (
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
	);
}

export default Page3;
