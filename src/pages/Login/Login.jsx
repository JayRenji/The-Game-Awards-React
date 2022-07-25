import React from "react";
import { useState } from "react";
import "./Login.scss";
import Swal from "sweetalert2";

const Login = ({ setLogged }) => {
	const INITIAL_STATE = {
		email: "",
		password: "",
	};

	const [formState, setFormState] = useState(INITIAL_STATE);

	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};

	const submitForm = (event) => {
		event.preventDefault();
		if (formState.email.length > 8 && formState.password.length > 8) {
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Welcome!",
				showConfirmButton: false,
				timer: 1500,
			});
			localStorage.setItem("token", true);
			setLogged(true);
		}
	};

	return (
		<section className="login">
			<h2>Login</h2>
			<div className="container">
				<form onSubmit={submitForm} className="form">
					<div className="form__row1">
						<label>Email</label>
						<input
							type="text"
							onChange={handleInput}
							name="email"
							value={formState.email}
						></input>
					</div>

					<div className="form__row2">
						<label>Password</label>
						<input
							type="password"
							onChange={handleInput}
							name="password"
							value={formState.password}
						></input>
					</div>

					<div className="buttons">
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
