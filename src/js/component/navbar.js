import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-2">
			<Link to="/">
				<img
					src="https://lh3.googleusercontent.com/proxy/8mLWVtHkpoxStvSj9Yjh4R6HbHcowflSke7a07Pp3UIVY4WVfx_odcIIVOcD33V-Jg87bJM8rkrXbEwB46ZzZ2PPco9lzU6I7zrhrhSHC1QQaQ6_8fmzerKCMqOmoyk6E_pLsg"
					width="230rem"
					className="logo navbar-brand mb-0 h1 text-warning"
				/>
			</Link>
			<div className="dropdown dropleft">
				<button
					className="btn dropdown-toggle btn-outline-info"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					{store.favourites.length + ` Favourites`}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favourites.map((item, index) => {
						return (
							<Link key={index} className="dropdown-item" to="/">
								{item.name}{" "}
								<button
									className="btn"
									onClick={() => {
										actions.removFav(item);
									}}>
									<i className="fas fa-trash-alt" />
								</button>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
