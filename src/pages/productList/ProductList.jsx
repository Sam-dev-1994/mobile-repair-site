import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/product/productCard/ProductCard.jsx';
import ProductFilters from '../../components/product/productFilters/Filters.jsx';
import { FiSliders } from 'react-icons/fi';
import BackButton from '../../components/home/backButton/BackButton.jsx';

export default function ProductList() {
	const productCategory = useParams();

	const titles = {
		accessories: 'لوازم جانبی',
		used: 'گوشی های کارکرده',
		new: 'گوشی های جدید',
		samsung: 'محصولات سامسونگ',
		apple: 'محصولات اپل',
		xiaomi: 'محصولات شیائومی',
		tablet: 'تبلت ها',
		mobile: 'گوشی موبایل',
	};

	const [products, setProducts] = useState(null);
	const [error, setError] = useState(null);

	const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

	const [filters, setFilters] = useState({
		category: [],
		brand: [],
		condition: [],
		storage: [],
		price: {
			min: '',
			max: '',
		},
	});

	useEffect(() => {
		fetch(`https://dummyjson.com/products/category/smartphones`)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.products);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
			});
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container py-5 mx-auto ">
			<BackButton fallbackPath="/" />
			<div className="w-full h-20  border-b border-gray-300 px-4 flex items-center justify-center">
				<h1 className="w-full text-center text-xl font-semibold mx-auto ">
					{titles[productCategory.category]}
				</h1>
			</div>
			{error && (
				<div className="text-red-500 p-3 md:py-5 text-sm text-center">
					دریافت محصولات با خطا مواجه شد
				</div>
			)}

			<div className="mb-4 md:hidden ">
				<button
					type="button"
					onClick={() => setMobileFilterOpen(true)}
					className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-800 shadow-sm transition hover:border-[#0f766e] hover:text-[#0f766e] active:scale-[0.98]"
				>
					<FiSliders className="text-[#0f766e]" />
					فیلتر
				</button>
			</div>

			<div className="flex items-start gap-6 py-3 md:py-4">
				<ProductFilters
					filters={filters}
					setFilters={setFilters}
					mobileOpen={mobileFilterOpen}
					setMobileOpen={setMobileFilterOpen}
				/>

				<div className="flex-1">
					<div className="flex flex-wrap justify-center items-stretch">
						{products &&
							products.map((product) => (
								<div
									key={product.id}
									className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 p-0 md:p-1"
								>
									<ProductCard product={product} />
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
