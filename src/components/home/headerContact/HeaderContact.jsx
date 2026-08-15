import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoStorefrontOutline } from 'react-icons/io5';
import { Link } from 'react-router';

export default function HeaderContact() {
	return (
		<div className="sm:hidden flex flex-col gap-3 justify-center items-center px-2 py-4 w-full mx-auto bg-dark-bg text-white">
			<a
				href="tel:09121234567"
				className="inline-flex items-center justify-center py-3 border border-white rounded-lg w-7/12 hover:bg-white hover:text-brand-primary transition duration-300 "
			>
				<FaPhone className="ml-3" />
				<span> مشاوره و تماس</span>
			</a>
			<Link
				to="/shop"
				className="inline-flex items-center justify-center py-3 rounded-lg bg-brand-primary w-7/12 transition duration-300 hover:bg-brand-secondary "
			>
				<IoStorefrontOutline className="ml-3" />
				<span> فروشگاه </span>
			</Link>
		</div>
	);
}
