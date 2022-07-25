import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { API } from "../../shared/Api/Api";

const Login = () => {
	const navigate = useNavigate();

	const onSubmit = (formData) => {
		formData.preventDefault();
		console.log("hola");
		API.post("api/users/login", formData).then((res) => {
			console.log(res);
			localStorage.setItem("token", res.data.token);
			console.log("consigo entrar?");
		});

		if (localStorage.getItem("token")) {
			navigate("/management");
		} else {
			console.log("no logueado");
		}
	};

	return (
		<section className="login">
			<h2>Login</h2>
			<div className="container">
				<form onSubmit={onSubmit} className="form">
					<div className="form__row1"></div>
					<label>
						<p>Email</p>
						<input
							type="text"
							id="email"
							name="email"
							// required
							// autoComplete="off"
							// placeholder="example@example.com"
						/>
					</label>
					<div className="form__row2">
						<label>
							<p>Password</p>
							<input
								type="password"
								id="password"
								name="password"
								// required
								// autoComplete="off"
								// placeholder="with letters and numbers, min 8"
								// pattern="\A(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{8,12}\Z"
							/>
						</label>
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
