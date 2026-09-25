import React from 'react';
import ServicesTitle from '../servicesTitle/ServicesTitle.jsx';
import ServicesItem from '../servicesItem/ServicesItem.jsx';
import { FaPhone } from 'react-icons/fa6';

export default function Services() {
	return (
		<div
			className="container px-3 pb-6  m-auto scroll-section"
			id="sevices"
		>
			<ServicesTitle />
			<ServicesItem />
		</div>
	);
}
