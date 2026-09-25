import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import CartProduct from './CartProduct.jsx';
import { Link } from 'react-router';
import BackButton from '../backButton/BackButton.jsx';

export default function Cart() {
	const cart = useContext(CartContext);

	const productCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0,
	);

	return (
		<section className="bg-white shadow-md rounded-xl border border-neutral-100  mx-auto max-w-6xl">
			<div className="container px-4 mx-auto  ">
				<BackButton fallbackPath="/" />
				<h3 className="w-full py-4 text-xl md:text-2xl text-neutral-800 text-center font-bold border-b border-neutral-100 mb-4">
					سبد خرید
				</h3>

				{productCount > 0 ? (
					<div className="flex flex-col lg:flex-row items-start gap-6">
						<div className="w-full lg:w-2/3 flex flex-col gap-4">
							{cart.items.map((item) => (
								<CartProduct
									key={item.id}
									id={item.id}
									quantity={item.quantity}
									color={item.color}
								/>
							))}
						</div>

						<div className="w-full lg:w-1/3 bg-neutral-50 border border-neutral-200 rounded-xl p-5 sticky top-6 shadow-sm">
							<h4 className="font-bold text-neutral-800 mb-4 pb-2 border-b border-neutral-200">
								خلاصه سفارش
							</h4>

							<p className="text-sm text-neutral-500">
								تعداد اقلام: {productCount} عدد
							</p>

							<button className="w-full mt-6 bg-brand-secondary text-white font-medium py-2.5 rounded-lg transition duration-300 hover:opacity-90 shadow-sm">
								ادامه فرآیند خرید
							</button>
						</div>
					</div>
				) : (
					<div className="flex flex-col justify-center items-center w-full py-10 gap-6">
						<div className="w-48 sm:w-64">
							<img
								src="/images/empty-cart.webp"
								alt="سبد خرید خالی"
								className="block w-full h-full object-contain   rounded-full"
							/>
						</div>
						<p className="text-red-500 font-semibold sm:text-lg text-center">
							سبد خرید شما خالی است!
						</p>
						<Link
							to="/"
							className="inline-flex justify-center items-center min-w-[160px] bg-brand-secondary text-white text-sm font-medium px-6 py-2.5 rounded-lg transition duration-300 hover:opacity-90 shadow-sm"
						>
							بازگشت به صفحه اصلی
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
