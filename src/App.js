import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./core/Footer/Footer";
import Header from "./core/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Management from "./pages/Management/Management";
import Podium from "./pages/Podium/Podium";
import Register from "./pages/Register/Register";
import RequireAuth from "./shared/functions/RequireAuth";
import { useState } from "react";

function App() {
	const [logged, setLogged] = useState(false);

	return (
		<div className="App">
			<Header setLogged={setLogged} logged={logged} />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/podium" element={<Podium />} />
					<Route
						path="/management"
						element={
							<RequireAuth>
								<Management />
							</RequireAuth>
						}
					/>
					<Route
						path="/login"
						element={<Login setLogged={setLogged} logged={logged} />}
					/>
					<Route path="/register" element={<Register />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
