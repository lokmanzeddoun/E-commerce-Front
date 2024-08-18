import { useEffect, useState } from "react";
import login from "../../images/login.png";
import NavbarSearchHook from "./../../hook/search/navbar-search-hook";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
const NavBarLogin = () => {
	//const dispatch = useDispatch()

	const [OnChangeSearch, searchWord] = NavbarSearchHook();
	let word = "";
	if (localStorage.getItem("searchWord") != null)
		word = localStorage.getItem("searchWord");

	const [user, setUser] = useState("");
	useEffect(() => {
		if (localStorage.getItem("user") != null)
			setUser(JSON.parse(localStorage.getItem("user")));
	}, []);

	const logOut = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		setUser("");
	};

	const [itemsNum] = GetAllUserCartHook();

	return (
		<div className="navbar bg-gray-800 sticky-top text-slate-100">
			<div className="">
				<a href="/" className="btn btn-ghost text-xl">
					E-Commerce
				</a>
			</div>
			<div className="flex-grow flex justify-center items-center">
				<input
					value={word}
					onChange={OnChangeSearch}
					type="search"
					aria-label="Search"
					placeholder="Search ..."
					className="input input-bordered w-24 md:w-1/2 text-center"
				/>
			</div>
			{user != "" ? (
				<div className="flex-none">
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle"
						>
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item -left-4">
									{" "}
									{itemsNum || 0}
								</span>
							</div>
						</div>
						<div
							tabIndex={0}
							className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
						>
							<div className="card-body">
								<span className="text-lg font-bold">Items</span>
								<div className="card-actions">
									<a className="btn btn-primary btn-block" href="/cart">
										View cart
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							{user.role !== "admin" ? (
								<li>
									<a className="justify-between" href="/user/profile">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
							) : (
								<li>
									<a className="justify-between" href="/admin/allproducts">
										Dashboard
									</a>
								</li>
							)}
							<li>
								<a onClick={logOut} href="/">
									Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<a href="/login" className="p-2 ">
					<img src={login} className="login-img" alt="loginImage" />
					<p style={{ color: "white" }}>Login</p>
				</a>
			)}
		</div>
	);
};

export default NavBarLogin;
