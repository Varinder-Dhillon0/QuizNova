function Navbar() {
	return (
		<div className="py-8 px-28 flex justify-around items-center font-Satoshi-Regular">
			<a href="">
				<img
					src="https://assets.website-files.com/623865af2eee366912508587/623891ef81d2e4d287675658_Group%2022.svg"
					alt=""
				/>
			</a>
			<ul className="flex gap-10 text-base">
				<li>About</li>
				<li>Pricing</li>
				<li>Features</li>
				<li>Integration</li>
				<li>Blog</li>
				<li>Contact</li>
			</ul>
			<div className="nav-items-right flex items-center gap-4">
				<a href="/login" >
					Login
				</a>
				<button className="bg-black text-white rounded-3xl px-6 py-3">
					Sign Up
				</button>
			</div>
		</div>
	);
}

export default Navbar;
