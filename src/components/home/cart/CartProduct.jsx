import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { getProductDataById } from '../../services/ProductServices.jsx';
import { AiOutlineDelete } from 'react-icons/ai';

export default function CartProduct({ id, quantity, color }) {
	const cart = useContext(CartContext);
	const [productData, setProductData] = useState(null);
	const [error, setError] = useState(null);

	const getColorName = (colorCode) => {
		switch (Number(colorCode)) {
			case 1:
				return 'مشکی';
			case 2:
				return 'سفید';
			case 3:
				return 'نقره‌ای';
			case 4:
				return 'آبی ملایم';
			default:
				return '';
		}
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getProductDataById(id);
				setProductData(data);
			} catch (err) {
				setError('خطا در دریافت اطلاعات محصول');
			}
		};
		getData();
	}, [id]);

	if (!productData) return null;

	return (
		<div className="p-4 bg-white border border-neutral-200 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4 text-sm lg:text-base shadow-sm transition-all hover:shadow-md">
			<div className="w-20 h-20 flex-shrink-0 border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50">
				<img
					className="w-full h-full object-contain"
					src={productData.images?.[2] || productData.images?.[0]}
					alt={productData.title}
				/>
			</div>

			<div className="flex-grow text-center sm:text-right">
				<h4 className="font-semibold text-neutral-800 line-clamp-1">
					{productData.title}
				</h4>
				{color && (
					<span className="text-xs text-neutral-500 mt-1 inline-block">
						رنگ: {getColorName(color)}
					</span>
				)}
			</div>

			<div className="flex items-center gap-2 border border-neutral-300 rounded-lg p-1">
				<button
					className="w-7 h-7 flex items-center justify-center text-lg font-medium text-neutral-700 rounded hover:bg-neutral-100 cursor-pointer transition-colors"
					onClick={() =>
						cart.removeItemFromCart(productData.id, color)
					}
					title="کاهش تعداد"
				>
					-
				</button>
				<span className="w-6 text-center font-medium text-neutral-800">
					{quantity}
				</span>
				<button
					className="w-7 h-7 flex items-center justify-center text-lg font-medium text-neutral-700 rounded hover:bg-neutral-100 cursor-pointer transition-colors"
					onClick={() => cart.addItemToCart(productData.id, color, 1)}
					title="افزایش تعداد"
				>
					+
				</button>
			</div>

			<div className="font-bold text-neutral-900 min-w-[100px] text-center sm:text-left">
				{(quantity * productData.price).toLocaleString()}{' '}
				<span className="text-xs font-normal text-neutral-500">
					تومان
				</span>
			</div>

			<button
				className="flex items-center justify-center gap-1.5 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded-lg transition-colors cursor-pointer text-sm font-medium"
				onClick={() => {
					cart.removeItemFromCart(productData.id, color);
				}}
				title="حذف از سبد خرید"
			>
				<AiOutlineDelete className="text-lg" />
				<span className="hidden sm:inline">حذف</span>
			</button>
		</div>
	);
}
