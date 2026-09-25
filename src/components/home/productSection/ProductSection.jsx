import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { GoArrowLeft } from 'react-icons/go';
import ProductsSlider from '../../product/productsSlider/ProductsSlider.jsx';
import { IoSparklesSharp } from 'react-icons/io5';

export default function ProductSection({ title, category }) {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true); //
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://dummyjson.com/products/category/smartphones?select=title,price,images,id&limit=8`,
		)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.products);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [category]);

	return (
		<section
			className={`shadow shadow-gray-300 py-3  md:py-5 my-2 md:my-4 ${title === 'جدیدترین گوشی ها' ? 'bg-brand-secondary text-white ' : 'bg-white'} ${isLoading ? 'h-96' : 'h-auto'}`}
		>
			<div className={`container  mx-auto p-3 `}>
				<div className="flex justify-between items-center mb-3 sm:mb-4 border-b border-neutral-300 pb-3">
					<h4 className="text-[0.7rem] min-[230px]:text-[0.8rem] sm:text-lg font-semibold">
						{title === 'جدیدترین گوشی ها' && (
							<IoSparklesSharp className="inline-block ml-1 text-xl min-[230px]:text-2xl" />
						)}

						{title}
					</h4>
					<Link
						to={`/category/${category}`}
						className={`text-[0.6rem] min-[230px]:text-[0.7rem] sm:text-[0.8rem] text-brand-orange ${title === 'جدیدترین گوشی ها' ? 'bg-brand-secondary text-white rounded-2xl' : ''}`}
					>
						مشاهده همه
						<GoArrowLeft className="inline-block" />
					</Link>
				</div>

				{error && (
					<div className="text-red-500 p-3 md:py-5 text-sm text-center">
						دریافت محصولات با خطا مواجه شد
					</div>
				)}

				<ProductsSlider products={products} isLoading={isLoading} />
			</div>
		</section>
	);
}
