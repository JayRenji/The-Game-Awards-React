import React from "react";
import { useState } from "react";
import "./Login.scss";
import Swal from "sweetalert2";

// En app:
// const [logged, setLogged] = useState(false);

// En nav: const nav = ({setLogged})

// const Logout = () => {
// 	localStorage.removeItem("token");
// 	return <Navigate to="/" />;
// 	setLogged(false);
// };

// y {logged && <li onClick={() => logout()}}

const Login = () => {
	const INITIAL_STATE = {
		user: "",
		password: "",
	};

	const [formState, setFormState] = useState(INITIAL_STATE);

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};

	const submitForm = (event) => {
		event.preventDefault();
		if (formState.user.length > 8 && formState.password.length > 8) {
			console.log("me he logueado");
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Welcome!",
				showConfirmButton: false,
				timer: 1500,
			});
			localStorage.setItem("token", true);
			// setLogged(true); Cuando esté en nav el setLogged
		} else {
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Not authorized",
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};

	return (
		<section className="login">
			<h2>Login</h2>
			<div className="container">
				<form onSubmit={submitForm} className="form">
					<div className="form__row1">
						<label>User</label>
						{/* 
						Pattern numbers & letters, min 8 */}
						<input
							type="text"
							onChange={handleInput}
							name="user"
							pattern="\A(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{8,12}\Z"
							value={formState.user}
						></input>
					</div>

					<div className="form__row2">
						<label>Password</label>
						{/* 
						Pattern numbers & letters, min 8 */}
						<input
							type="password"
							onChange={handleInput}
							name="password"
							pattern="\A(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{8,12}\Z"
							value={formState.password}
						></input>
					</div>

					<div className="buttons">
						<button>Login</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
