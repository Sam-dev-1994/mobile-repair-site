import { FaPhone } from 'react-icons/fa6';
import { IoStorefrontOutline } from 'react-icons/io5';
import { Link } from 'react-router';

export default function HeaderContact() {
	return (
		<div className="sm:hidden flex flex-col gap-3 justify-center items-center px-4 py-4 w-full bg-dark-bg text-white">
			<a
				href="tel:09121234567"
				className="w-full max-w-xs inline-flex items-center justify-center gap-2 py-2.5 px-4 border border-white/80 rounded-xl text-sm font-medium hover:bg-white hover:text-brand-primary active:scale-95 transition-all duration-200 shadow-sm"
			>
				<FaPhone className="text-base" />
				<span>مشاوره و تماس</span>
			</a>
			<Link
				to="/"
				className="w-full max-w-xs inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-primary text-sm font-medium hover:bg-brand-secondary active:scale-95 transition-all duration-200 shadow-sm"
			>
				<IoStorefrontOutline className="text-lg" />
				<span>فروشگاه</span>
			</Link>
		</div>
	);
}
