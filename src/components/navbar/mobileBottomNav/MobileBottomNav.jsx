import { NavLink } from 'react-router';
import { IoHome } from 'react-icons/io5';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

export default function MobileBottomNav() {
	const cart = useContext(CartContext);

	const productCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0,
	);

	return (
		<section className="fixed md:hidden bottom-0 right-0 w-full h-16 bg-white z-50 shadow-lg border-t border-neutral-200">
			<div className="container px-4 mx-auto h-full">
				<div className="flex flex-row justify-between items-center w-full h-full">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`flex flex-col justify-center items-center gap-1 transition-colors ${
								isActive
									? 'text-brand-secondary font-semibold'
									: 'text-neutral-500 hover:text-neutral-800'
							}`
						}
					>
						<IoHome className="text-xl" />
						<span className="text-[0.7rem]">خانه</span>
					</NavLink>

					<NavLink
						to="/categories"
						className={({ isActive }) =>
							`flex flex-col justify-center items-center gap-1 transition-colors ${
								isActive
									? 'text-brand-secondary font-semibold'
									: 'text-neutral-500 hover:text-neutral-800'
							}`
						}
					>
						<BiSolidCategoryAlt className="text-xl" />
						<span className="text-[0.7rem]">دسته‌بندی</span>
					</NavLink>

					<NavLink
						to="/repair"
						className={({ isActive }) =>
							`flex flex-col justify-center items-center gap-1 transition-colors ${
								isActive
									? 'text-brand-secondary font-semibold'
									: 'text-neutral-500 hover:text-neutral-800'
							}`
						}
					>
						<FaScrewdriverWrench className="text-xl" />
						<span className="text-[0.7rem]">تعمیرات</span>
					</NavLink>

					<NavLink
						to="/cart"
						className={({ isActive }) =>
							`relative flex flex-col justify-center items-center gap-1 transition-colors ${
								isActive
									? 'text-brand-secondary font-semibold'
									: 'text-neutral-500 hover:text-neutral-800'
							}`
						}
					>
						<div className="relative">
							<FaShoppingCart className="text-xl" />
							{productCount > 0 && (
								<span className="absolute -top-2 -right-3 bg-red-500 text-white text-[0.65rem] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
									{productCount}
								</span>
							)}
						</div>
						<span className="text-[0.7rem]">سبد خرید</span>
					</NavLink>
				</div>
			</div>
		</section>
	);
}
