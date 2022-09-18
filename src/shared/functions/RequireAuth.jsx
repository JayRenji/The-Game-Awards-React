import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function RequireAuth({ children }) {
	if (!localStorage.getItem("token") ) {
		Swal.fire({
			position: "center",
			icon: "warning",
			title: "Please, login",
			showConfirmButton: false,
			timer: 1500,
		});
		return <Navigate to="/login" />;
	}

	if (localStorage.getItem("rol")==="admin")  {
		return children
	} else {
	
		return <Navigate to= "/"/>
	}

}
