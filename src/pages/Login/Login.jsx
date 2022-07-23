//import { Navigate } from "react-router-dom";
import { API } from "../../shared/Api/Api";
import "./Login.scss";
//import Swal from "sweetalert2";
// import { useState } from "react";

// Comentadas las partes que dependen de las rutas de la API. Pendientes de confirmar.

const Login = () => {
	//const setAdmin = false;

	const onSubmit = (formData) => {
		API.post("user/", formData).then((res) => {
			localStorage.setItem("token", res.data.token);
			// localStorage.setItem("token", res.data.rol);

			console.log(res.token);
			// console.log(res.data.rol);
		});

		// Permitir el paso sólo si es Administrador. En caso contrario mostrar alert

		// if (res.data.rol === "admin") {
		// 	setAdmin(true);
		// 	return <Navigate to="/management" />;
		// } else {
		// 	setAdmin(false);
		// 	Swal.fire({
		// 		position: "center",
		// 		icon: "success",
		// 		title: "Not Admin",
		// 		showConfirmButton: false,
		// 		timer: 1500,
		// 	});
		// }
	};

	return (
		<>
			<section className="login">
				<h2>Login</h2>
				<div className="container">
					<form onSubmit={onSubmit} className="form">
						<div className="form__row1">
							<label>User</label>
							<input
								type="text"
								id="user"
								name="user"
								autoComplete="off"
							></input>
						</div>
						<div className="form__row2">
							<label>Password</label>
							<input
								type="password"
								id="password"
								name="password"
								autoComplete="off"
							></input>
						</div>
						<div className="buttons">
							<button type="submit">Login</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Login;
