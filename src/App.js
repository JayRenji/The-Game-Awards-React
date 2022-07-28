import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./core/Footer/Footer";
import Header from "./core/Header/Header";
// import Home from "./pages/Home/Home";
import RequireAuth from "./shared/functions/RequireAuth";
import React, { Suspense, useState } from "react";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
import Login from "./pages/Login/Login";
import Management from "./pages/Management/Management";
import Register from "./pages/Register/Register";

const Home = React.lazy(() => import('./pages/Home/Home'));
const Podium = React.lazy(() => import('./pages/Podium/Podium'));

function App() {
	const [logged, setLogged] = useState(false);

	return (
		<div className="App">
			<Header setLogged={setLogged} logged={logged} />
			<main>
				<Routes>
					{/* <Suspense fallback={<div>Loading...</div>}> */}
						<Route path="/" element={<Suspense fallback={<LoadingComponent/>}><Home /></Suspense>} />
					{/* </Suspense> */}
					{/* <Suspense  fallback={<div>Loading...</div>}> */}
						<Route path="/podium" element={<Suspense fallback={<LoadingComponent/>}><Podium /></Suspense>} />
					{/* </Suspense> */}
					
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
