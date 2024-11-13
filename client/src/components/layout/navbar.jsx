import React from "react";
import { useAuth } from "../../hooks/useAuth";
import User from "../common/user";
import Logo from "/logo.svg";


function Navbar() {

	const {loggedin} = useAuth();

	return (
		<div className="py-8 px-28 flex justify-around items-center font-Satoshi-Regular">
			<a href="" className="items-center flex gap-3">
				<img src={Logo} className="w-6 h-6" alt="" />
				<p className="font-Satoshi-Bold text-xl">QuizNova</p>
			</a>
			<ul className="flex gap-10 text-base">
				<li>About</li>
				<li>Pricing</li>
				<li>Features</li>
				<li>Integration</li>
				<li>Blog</li>
				<li>Contact</li>
			</ul>
			{loggedin ? 
				<User/>
			: <div className="nav-items-right flex items-center gap-4">
				<a href="/login" >
					Login
				</a>
				<button className="bg-black text-white rounded-3xl px-6 py-3">
					Sign Up
				</button>
			</div>}
		</div>
	);
}

export default Navbar;
