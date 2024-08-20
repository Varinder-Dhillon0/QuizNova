import React from "react";

function Cards() {
	return (
		<div className="flex justify-center py-20">
			<div className="w-10/12 grid grid-cols-3 gap-4">
				<div className="col-span-2 bg-black flex flex-col gap-6 text-white rounded-3xl p-14 px-8">
					<div>
						<p className="font-Satoshi-Bold text-6xl">
							Accounting software
						</p>
						<p className="font-Boska-BoldItalic text-white text-opacity-70 text-6xl leading-snug">
							that handles it all.
						</p>
					</div>
					<button className="w-min text-nowrap bg-customGreen gap-2 rounded-full flex justify-center items-center p-6 px-10">
						<p className="text-black uppercase font-Satoshi-Medium">
							see all features
						</p>
						<img
							src="https://assets.website-files.com/623865af2eee366912508587/6239795bd32e5368c4c57718_ArrowUpRight%20Black.svg"
							alt=""
						/>
					</button>
				</div>

				<div className="border-2 border-black rounded-3xl flex flex-col justify-center items-start gap-4 p-11">
                    <img src="https://assets.website-files.com/623865af2eee366912508587/623970939f2e405913eb4c72_image%2040.png" alt="" className="w-24 h-24"/>
                    <h1 className="font-Satoshi-Bold text-4xl">Easy Invoicing</h1>
                    <p className="font-Satoshi-Regular text-xl">Automate recurring invoices and save time by using pre-built templates. Get paid on time.</p>
                </div>
				<div className="border-2 border-black rounded-3xl flex flex-col justify-center items-start gap-4 p-12"> <img src="https://assets.website-files.com/623865af2eee366912508587/623c977937b44c2109310b1f_image%2041.png" alt="" className="w-24 h-24"/>
                    <h1 className="font-Satoshi-Bold text-4xl">Manage Expenses</h1>
                    <p className="font-Satoshi-Regular text-xl">Snap and categorize receipts in seconds and link your bank account.</p></div>
				<div className="border-2 border-black rounded-3xl flex flex-col justify-center items-start gap-4 p-11"><img src="https://assets.website-files.com/623865af2eee366912508587/623c977a2a8f363f724cb8e1_image%2039.png" alt="" className="w-24 h-24"/>
                    <h1 className="font-Satoshi-Bold text-4xl">Streamline Payroll</h1>
                    <p className="font-Satoshi-Regular text-xl">Set up payroll and bonuses for all your employees, and never be late on salaries.</p></div>
				<div className="border-2 border-black rounded-3xl flex flex-col justify-center items-start gap-4 p-11"><img src="https://assets.website-files.com/623865af2eee366912508587/623c977aa976e7a46f340175_image%2042.png" alt="" className="w-24 h-24"/>
                    <h1 className="font-Satoshi-Bold text-4xl">Complete Visibility</h1>
                    <p className="font-Satoshi-Regular text-xl">Get real-time visibility into every expense and payment, with a neat dashboard.</p></div>
			</div>
		</div>
	);
}

export default Cards;
