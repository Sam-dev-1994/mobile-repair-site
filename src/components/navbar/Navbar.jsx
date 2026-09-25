import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.webp';
import './navbar.css';

import { Link } from 'react-router';
import NavbarMenu from './navbarMenu/NavbarMenu.jsx';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import CategoryMenu from '../home/categoryMenu/CategoryMenu.jsx';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdSearch } from 'react-icons/io';
import NavbarMenuMobile from './navbarMenuMobile/NavbarMenuMobile.jsx';

export default function Navbar() {
	const menuRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const cart = useContext(CartContext);

	const productCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0,
	);

	const handleMenu = () => {
		if (menuRef.current) {
			menuRef.current.style.display = 'block';
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="h-20 sm:h-30 md:h-28 bg-brand-info shadow-sm text-sm">
			<nav
				className={`w-full transition-all duration-300 ${
					isScrolled
						? 'fixed top-0 right-0 z-50 bg-brand-info shadow-md border-b border-neutral-200'
						: 'static'
				}`}
			>
				<div className="container px-3 mx-auto">
					<div className="flex flex-col md:flex-row justify-start items-center py-1 gap-1 sm:gap-3 ">
						<div className="flex justify-between items-center w-full md:w-auto ">
							<div className="md:hidden">
								<button
									onClick={handleMenu}
									className="p-1 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
									aria-label="منو"
								>
									<GiHamburgerMenu className="text-lg text-neutral-800" />
								</button>
								<NavbarMenuMobile ref={menuRef} />
							</div>

							<div className="w-18 sm:w-28 mx-auto md:mx-0">
								<Link to="/" className="block w-full">
									<img
										src={logo}
										alt="تعمیرات تخصصی موبایل"
										className="w-full h-auto object-contain"
									/>
								</Link>
							</div>

							<div className="md:hidden w-6" />
						</div>

						<div className="relative w-full md:w-1/2 lg:w-2/5">
							<input
								type="text"
								placeholder="جستجو در فون داک..."
								className="w-full rounded-2xl border border-neutral-300 bg-white py-1 sm:py-2 pr-4 pl-10 text-neutral-800 outline-none transition focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20 shadow-sm text-xs sm:text-sm"
							/>
							<IoMdSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-neutral-400" />
						</div>
						<div className="hidden md:flex items-center">
							<Link
								to="/cart"
								className="relative p-2 rounded-xl hover:bg-black/5 transition-colors"
							>
								<FiShoppingCart className="text-2xl text-brand-secondary" />
								{productCount > 0 && (
									<span className="absolute -top-1 -right-1 flex justify-center items-center bg-brand-orange text-white font-bold rounded-full w-5 h-5 text-xs shadow-sm">
										{productCount}
									</span>
								)}
							</Link>
						</div>
					</div>

					<div className="hidden md:flex gap-4 justify-start items-center py-2 border-t border-black/5">
						<CategoryMenu />
						<NavbarMenu />
					</div>
				</div>
			</nav>
		</div>
	);
}
