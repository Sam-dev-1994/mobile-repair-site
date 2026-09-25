import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Repair from './pages/repair/Repair.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/repair/footer/Footer.jsx';
import ProductList from './pages/productList/ProductList.jsx';
import ShowProduct from './pages/showProduct/Show.jsx';
import { CartProvider } from './components/context/CartContext.jsx';
import Home from './pages/home/Home.jsx';
import Cart from './components/home/cart/Cart.jsx';
import MobileBottomNav from './components/navbar/mobileBottomNav/MobileBottomNav.jsx';
import { CategoryProvider } from './components/context/CategoryContext.jsx';
import MobileCategories from './pages/mobileCategories/MobileCategories.jsx';
import WhatsAppButton from './components/home/whatsAppButton/WhatsAppButton.jsx';

function App() {
	return (
		<CartProvider>
			<CategoryProvider>
				<main className="min-h-screen bg-gray-100 mb-15 md:mb-0 ">
					<div className="w-full mx-auto">
						<BrowserRouter basename="/mobile-repair-site">
							<Navbar />
							<Routes>
								<Route exact path="/" element={<Home />} />
								<Route
									exact
									path="/repair"
									element={<Repair />}
								/>
								<Route
									exact
									path="/products/:productId"
									element={<ShowProduct />}
								/>
								<Route
									exact
									path="/categories"
									element={<MobileCategories />}
								/>
								<Route
									exact
									path="/category/:category"
									element={<ProductList />}
								/>
								<Route exact path="/cart" element={<Cart />} />
							</Routes>
							<Footer />
							<WhatsAppButton />
							<MobileBottomNav />
						</BrowserRouter>
					</div>
				</main>
			</CategoryProvider>
		</CartProvider>
	);
}

export default App;
