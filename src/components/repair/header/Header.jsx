import React from 'react';
import Navbar from '../../navbar/Navbar.jsx';
import HeroSlider from '../heroSlider/HeroSlider.jsx';
import HeaderContact from '../headerContact/HeaderContact.jsx';

export default function Header() {
	return (
		<header className="w-full">
			<HeroSlider />
			<HeaderContact />
		</header>
	);
}
