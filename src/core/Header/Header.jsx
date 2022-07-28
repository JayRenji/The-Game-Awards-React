import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = ({ setLogged, logged }) => {
	const navigate = useNavigate();

	const setLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
		setLogged(false);
	};

	return (
		<header>
			<div className="headercontent">
				<Link to="/">
					<h1 className="headercontent__title neonText">TGA2022</h1>
				</Link>

				<ul className="headercontent__menu">
					<li>
						<Link to="/" className="neonText">
							Home
						</Link>
					</li>
					<li>
						<Link to="/podium" className="neonText">
							Podium
						</Link>
					</li>
					<li>
						<Link to="/management" className="neonText">
							Management
						</Link>
					</li>
					{!logged && (
						<li>
							<Link to="/login" className="neonText">
								Login
							</Link>
						</li>
					)}

					{!logged && (
						<li>
							<Link to="/register" className="neonText">
								Register
							</Link>
						</li>
					)}

					{logged && (
						<li>
							<a className="neonText logout" onClick={() => setLogout()}>
								Logout
							</a>
						</li>
					)}
				</ul>
			</div>
		</header>
	);
};

export default Header;
