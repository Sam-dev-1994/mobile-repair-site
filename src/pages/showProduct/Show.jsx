import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getProductDataById } from '../../components/services/ProductServices.jsx';
import ProductGallery from '../../components/product/productGallery/Gallery.jsx';
import ProductInfo from '../../components/product/productInfo/Info.jsx';
import ProductActions from '../../components/product/productActions/Actions.jsx';
import ProductSpecifications from '../../components/product/productSpecifications/Specifications.jsx';
import ProductNotice from '../../components/product/Notice.jsx';
import BackButton from '../../components/home/backButton/BackButton.jsx';

export default function ShowProduct() {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchProduct() {
			try {
				setLoading(true);
				setError(null);
				const data = await getProductDataById(productId);
				setProduct(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}

		if (productId) {
			fetchProduct();
		}
	}, [productId]);

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-[50vh] text-neutral-600 font-medium py-10">
				در حال دریافت اطلاعات...
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-10 text-red-500 font-medium">
				خطا در دریافت اطلاعات: {error}
			</div>
		);
	}

	if (!product) return null;

	return (
		<>
			<div className="container mx-auto px-4 mt-4">
				<BackButton fallbackPath="/" />
			</div>

			<div className="container mx-auto px-4 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8 md:mb-16 bg-white md:bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm items-start">
				<div className="w-full order-1 md:order-2">
					<ProductGallery product={product} />
				</div>

				<div className="w-full order-2 md:order-1 flex flex-col gap-4">
					<ProductInfo product={product} />
				</div>
			</div>
			<div className="container mx-auto flex flex-col gap-8 mb-12">
				<ProductActions product={product} />
				<ProductSpecifications product={product} />
				<ProductNotice />
			</div>
		</>
	);
}
