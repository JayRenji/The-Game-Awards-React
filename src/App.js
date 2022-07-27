import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './core/Footer/Footer';
import Header from './core/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Management from './pages/Management/Management';
import Podium from './pages/Podium/Podium';
import Checkout from './pages/Checkout/Checkout';

function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/podium' element={<Podium />} />
					<Route path='/management' element={<Management />} />
					<Route path='/login' element={<Login />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
