import Home from './pages/Home/Home.jsx';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/navbar/Navbar.jsx';
import Shop from './pages/Shop/Shop.jsx';

function App() {
	return (
		<main className="min-h-screen bg-gray-100 ">
			<div className=" mx-auto">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<Shop />} />
					</Routes>
				</BrowserRouter>
			</div>
		</main>
	);
}

export default App;
