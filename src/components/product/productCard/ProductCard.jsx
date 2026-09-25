import { Link } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function ProductCard({ product }) {
	return (
		<div className="w-full h-full border border-gray-200  transition duration-300 hover:shadow-lg shadow-gray-400 bg-white ">
			<Link
				to={product?.id ? `/products/${product.id}` : '#'}
				className=" w-full h-full flex flex-col justify-between "
				title={product?.title || ''}
			>
				<div className="text-center bg-gray-100 w-full aspect-square p-1">
					{!product && (
						<Skeleton
							width="90%"
							className="aspect-square mx-auto"
							baseColor="#e1e1e1"
							highlightColor="#cbcbcb"
						/>
					)}
					{product && (
						<img
							className="inline-block object-contain w-full aspect-square"
							src={product.images[0]}
							alt={product.title}
						/>
					)}
				</div>
				<div className="p-3 md:p-4 text-gray-900">
					<h3 className="text-sm md:text-base line-clamp-2 leading-snug">
						{(product && product.title) || (
							<Skeleton
								count={1}
								baseColor="#e1e1e1"
								highlightColor="#cbcbcb"
							/>
						)}
					</h3>
					<p className="text-sm md:text-base font-semibold text-left">
						تومان&nbsp;
						{(product && product.price) || (
							<Skeleton
								count={1}
								baseColor="#e1e1e1"
								highlightColor="#cbcbcb"
							/>
						)}
					</p>
				</div>
			</Link>
		</div>
	);
}
