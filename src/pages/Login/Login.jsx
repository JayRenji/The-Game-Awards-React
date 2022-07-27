import React from "react";
import "./Login.scss";
import Swal from "sweetalert2";
import {useForm} from "react-hook-form"
import {API} from "../../shared/Api/Api";
import { useNavigate } from "react-router";



const Login = ({setLogged}) => {
	
	const {register, handleSubmit} = useForm();

	const navigate = useNavigate();
	
	

	const onSubmit = (formData) => {
		API.post("users/login", formData).then((res) => {
			localStorage.setItem("token", res.data.token);
		
			setLogged(true);
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Welcome",
				showConfirmButton: false,
				timer: 1500,
			});
			setTimeout(()=>{
				navigate("/management")
			}, 600) 
		}).catch((error)=>{
			Swal.fire({
				position: "center",
				icon: "warning",
				title: "User not found",
				showConfirmButton: false,
				timer: 1500,
			});;
		})
		
		
	};

	return (
		<section className="login">
			<h2>Login</h2>
			<div className="container">
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<div className="form__row1">
						<label>Email</label>
						<input
							type="text"
							
							name="email"
							
							id="email" {...register("email", {required:true})}
						></input>
					</div>

					<div className="form__row2">
						<label>Password</label>
						<input
							type="password"
							
							name="password"
							id="password" {...register("password", {required:true})}
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
