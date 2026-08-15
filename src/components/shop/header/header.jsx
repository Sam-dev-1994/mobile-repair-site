import { IoMdSearch } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router';
export default function ShopHeader() {
	return (
		<section className=" mb-4 shadow-lg shadow-gray-300 bg-white">
			<div className="container mx-auto px-3 py-4 w-full flex justify-between items-center">
				{/*<div>*/}
				{/*	<FaBars className="inline-block ml-3" />*/}
				{/*	<span>دسته بندی ها</span>*/}
				{/*</div>*/}
				<div className="relative w-3/4 sm:w-1/2 max-w-md">
					<input
						type="text"
						placeholder="جستجوی محصول"
						className="w-full rounded-3xl border border-gray-300 bg-white py-1 pr-4 outline-none transition focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary"
					/>
					<IoMdSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-lg text-brand-secondary" />
				</div>
				<div>
					<Link to="/shop/cart">
						<FiShoppingCart className="text-2xl text-brand-secondary" />
					</Link>
				</div>
			</div>
		</section>
	);
}
