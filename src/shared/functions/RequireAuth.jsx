import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

// Si localStorage tiene token, permitir el acceso a Management. Envolver el li de la nav de management con la funcion RequireAuth

export default function RequireAuth({ children }) {
	if (!localStorage.getItem("token")) {
		Swal.fire({
			position: "center",
			title: "Password incorrect. Please Check it.",
			showConfirmButton: false,
			timer: 1500,
		});
		return <Navigate to="/login" />;
	}

	return children;
}
