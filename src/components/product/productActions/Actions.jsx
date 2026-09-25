import { HiOutlineMinusSmall } from 'react-icons/hi2';
import { HiOutlinePlus } from 'react-icons/hi2';
import { FaCheck } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { colorList } from '../../services/ProductServices.jsx';

export default function ProductActions({ product }) {
	const [count, setCount] = useState(1);
	const cart = useContext(CartContext);

	const [isAdding, setIsAdding] = useState(false);
	const [justAdded, setJustAdded] = useState(false);
	const [selectedColor, setSelectedColor] = useState('');
	const [error, setError] = useState(false);

	if (!product) return null;

	const handleAddToCart = () => {
		if (!selectedColor) {
			setError(true);
			return;
		}
		setError(false);
		cart.addItemToCart(product.id, selectedColor, count);
		setIsAdding(true);

		setTimeout(() => {
			setIsAdding(false);
			setJustAdded(true);
			setTimeout(() => {
				setJustAdded(false);
			}, 2000);
		}, 1000);
	};

	return (
		<section className="px-3 sm:px-4 py-4 lg:p-6 space-y-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
			<div className="flex flex-col justify-start items-start gap-3 w-full">
				<div className="space-y-3 w-full">
					<span className="text-sm font-medium text-neutral-700 block">
						انتخاب رنگ:
					</span>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 w-full">
						{colorList.map((color) => (
							<div
								key={color.id}
								className={`flex flex-row justify-between items-center px-3 py-2 border rounded-xl cursor-pointer transition-all ${
									selectedColor === String(color.id)
										? 'border-brand-secondary bg-brand-secondary/5 ring-1 ring-brand-secondary'
										: 'border-neutral-200 hover:border-neutral-300'
								}`}
								onClick={() => {
									setSelectedColor(String(color.id));
									setError(false);
								}}
							>
								<span className="text-xs sm:text-sm font-medium text-neutral-700">
									{color.name}
								</span>
								<span
									className="w-4 h-4 rounded-full border border-neutral-300 shadow-inner flex-shrink-0"
									style={{ backgroundColor: color.hex }}
								/>
							</div>
						))}
					</div>
				</div>

				{error && (
					<p className="text-red-500 text-xs font-medium animate-pulse">
						لطفا رنگ محصول را انتخاب کنید.
					</p>
				)}

				<div className="flex flex-col gap-2 w-full pt-2">
					<label className="text-sm font-medium text-neutral-700">
						تعداد:
					</label>
					<div className="inline-flex items-center border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50 w-fit">
						<button
							onClick={() =>
								setCount((prev) => Math.max(1, prev - 1))
							}
							disabled={count <= 1}
							className={`h-10 w-10 flex justify-center items-center transition-colors ${
								count > 1
									? 'cursor-pointer hover:bg-neutral-200 text-neutral-800'
									: 'text-neutral-300 cursor-not-allowed'
							}`}
						>
							<HiOutlineMinusSmall className="h-4 w-4" />
						</button>
						<span className="px-6 py-2 min-w-[50px] text-center font-semibold text-neutral-800 text-sm">
							{count}
						</span>
						<button
							onClick={() => setCount((prev) => prev + 1)}
							className="h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-neutral-200 text-neutral-800 transition-colors"
						>
							<HiOutlinePlus className="h-4 w-4" />
						</button>
					</div>
				</div>
			</div>

			<div className="flex flex-row gap-3 pt-2">
				<button
					className="w-full sm:w-1/2 max-w-xs cursor-pointer rounded-xl overflow-hidden shadow-sm"
					onClick={handleAddToCart}
					disabled={isAdding}
				>
					<div
						className={`p-3 text-sm font-medium rounded-xl transition duration-300 flex justify-center items-center gap-2 w-full h-full ${
							justAdded
								? 'bg-emerald-600 text-white'
								: 'bg-brand-secondary text-white hover:opacity-90'
						}`}
					>
						{isAdding ? (
							'درحال افزودن به سبد خرید...'
						) : justAdded ? (
							<>
								<span>به سبد خرید اضافه شد!</span>
								<FaCheck className="h-4 w-4" />
							</>
						) : (
							<>
								<span>اضافه به سبد خرید</span>
								<FiShoppingCart className="h-4 w-4" />
							</>
						)}
					</div>
				</button>
			</div>
		</section>
	);
}
