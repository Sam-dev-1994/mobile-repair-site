import { useState } from 'react';
import MainSlider from './MainSlider.jsx';
import ProductImageModal from './ProductImageModal.jsx';

export default function ProductGallery({ product }) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="w-full mx-auto">
			<div className="w-full flex flex-col items-center">
				<div className="w-full">
					<MainSlider
						images={product && product.images}
						onImageClick={() => setIsOpen(true)}
						onSlideChange={setActiveIndex}
					/>

					{isOpen && (
						<ProductImageModal
							images={product && product.images}
							activeIndex={activeIndex}
							onClose={() => setIsOpen(false)}
							onSlideChange={setActiveIndex}
						/>
					)}
				</div>
			</div>
		</section>
	);
}
