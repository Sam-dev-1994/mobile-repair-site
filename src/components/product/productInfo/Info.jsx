import { MdOutlineStar } from 'react-icons/md';
import { BsShare } from 'react-icons/bs';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router';

export default function ProductInfo({ product }) {
	if (!product) return null;

	return (
		<section className="w-full px-3 sm:px-4 py-4 lg:p-6 space-y-4 md:space-y-6 order-2 md:order-1">
			<div className="text-xs md:text-sm flex flex-wrap items-center gap-1 text-neutral-500">
				<span className="flex items-center">
					دسته‌بندی{' '}
					<MdKeyboardArrowLeft className="inline-block mx-1" />
				</span>
				<Link
					to={`/shop/category/${product.category}`}
					className="text-brand-secondary hover:underline font-medium"
				>
					{product.category}
					<MdKeyboardArrowLeft className="inline-block mx-1" />
				</Link>
				<Link
					to={`/shop/category/${product.brand}`}
					className="text-brand-secondary hover:underline font-medium"
				>
					{product.brand}
				</Link>
			</div>

			<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-800 leading-relaxed">
				{product.title}
			</h1>

			<div className="flex items-center gap-3">
				<span className="text-xl sm:text-2xl font-bold text-neutral-900">
					{product.price ? product.price.toLocaleString() : '۰'}{' '}
					<span className="text-sm font-normal text-neutral-500">
						تومان
					</span>
				</span>
			</div>

			{product.rating && product.reviews && (
				<div className="flex items-center gap-2 text-sm text-neutral-600">
					<span>
						امتیاز کاربران:{' '}
						<strong className="text-neutral-800">
							{product.rating}
						</strong>{' '}
						از {product.reviews.length} رای:
					</span>
					<div className="flex items-center gap-0.5">
						{[...Array(Math.round(product.rating))].map((_, i) => (
							<MdOutlineStar
								key={i}
								className="text-yellow-500 text-base"
							/>
						))}
					</div>
				</div>
			)}

			<div className="flex flex-col gap-2 pt-2 border-t border-neutral-100">
				<div className="text-sm font-medium">
					وضعیت کالا:{' '}
					{product.availabilityStatus === 'In Stock' ? (
						<span className="text-green-600 font-semibold">
							موجود در انبار
						</span>
					) : (
						<span className="text-red-600 font-semibold">
							ناموجود
						</span>
					)}
				</div>

				{product.stock > 0 && (
					<div>
						<span className="inline-block py-1 px-3 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
							{product.stock} عدد در انبار باقی مانده
						</span>
					</div>
				)}
			</div>

			<div className="flex justify-between items-center py-2 text-sm border-t border-neutral-100">
				<button
					onClick={() => {
						if (navigator.share) {
							navigator.share({
								title: product.title,
								url: window.location.href,
							});
						} else {
							navigator.clipboard.writeText(window.location.href);
							alert('لینک کپی شد!');
						}
					}}
					className="flex items-center gap-1.5 text-neutral-600 hover:text-brand-secondary transition duration-300 cursor-pointer"
				>
					<BsShare className="h-4 w-4" />
					اشتراک گذاری
				</button>
			</div>

			<div className="text-sm md:text-base text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
				<p>{product.description}</p>
			</div>
		</section>
	);
}
