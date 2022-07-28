import React from "react";
import "./Register.scss";
import { API } from "../../shared/Api/Api";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"

const Register = () => {
	const navigate = useNavigate();

	const {register, handleSubmit} = useForm();

	const onSubmit = (formData) => {
		
		
		API.post("users", formData).then((res) => {});
		navigate("/");
		console.log(formData);
	};

	return (
		<section className="register">
			<h2>Enter into our community</h2>
			<div className="container">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<div className="form__row1">
						<label>
							User
						</label>
						<input autoComplete="off" type="text" id="userName" {...register("userName", {required:true})}></input>
					</div>
					<div className="form__row2">
						<label>
							Email
						</label>
						<input type="email" id="email" {...register("email", {required:true})}></input>
					</div>
					<div className="form__row3">
						<label>
							Password
						</label>
						<input type="password" id="password" {...register("password", {required:true})}></input>
					</div>

					<div className="buttons">
						<button type="submit">Enviar</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Register;
