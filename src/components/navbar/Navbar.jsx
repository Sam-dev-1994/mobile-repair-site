import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.webp';
import './navbar.css';
import { MdPhoneInTalk } from 'react-icons/md';
import { Link } from 'react-router';
import NavbarMenu from '../navbarMenu/NavbarMenu.jsx';
import NavbarMenuMobile from '../navBarMenuMobile/NavbarMenuMobile.jsx';

export default function Navbar() {
	const menuRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	function handleMenu() {
		menuRef.current.style.display = 'block';
	}
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
		<div className="h-16 sm:h-20 bg-brand-info">
			<nav
				className={`h-16 sm:h-20 w-full  ${isScrolled ? 'fixed top-0 right-0 z-50 bg-brand-info border-b border-b-gray-200' : 'relative'}`}
			>
				<div className="container px-3 mx-auto text-gray-800 h-full sm:text-md lg:text-lg">
					<div className="flex gep-2 justify-between items-center h-full  ">
						<div className="w-6 h-6 sm:hidden">
							<GiHamburgerMenu
								className=" cursor-pointer "
								onClick={handleMenu}
							/>
						</div>
						<NavbarMenuMobile ref={menuRef} />
						<div className=" text-direction hidden sm:block ">
							<Link
								to="tel:09121234567"
								className="inline-flex items-center border border-brand-primary rounded-lg p-2 transition contact-btn"
							>
								<MdPhoneInTalk className="text-lg contact-btn-icon mr-2" />
								<span className=" text-sm "> 09121234567</span>
							</Link>
						</div>
						<NavbarMenu />
						<div className="w-25 sm:w-30">
							<Link to="/" className="block w-full">
								<img src={logo} alt="تعمیرات تخصصی موبایل" />
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
