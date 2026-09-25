import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function ProductImageModal({ images, activeIndex, onClose, onSlideChange }) {
	return (
		<div className=" fixed inset-0 z-50 bg-white flex items-center justify-center w-full h-full">
			<button
				onClick={onClose}
				className=" absolute top-5 right-5 text-brand-secondary text-4xl sm:text-5xl cursor-pointer"
			>
				×
			</button>

			<div className="w-full max-w-5xl">
				<Swiper
					modules={[Navigation]}
					navigation
					initialSlide={activeIndex}
					onSlideChange={(swiper) =>
						onSlideChange(swiper.activeIndex)
					}
				>
					{images.map((img, index) => (
						<SwiperSlide key={index}>
							<div className="flex justify-center items-center">
								<img
									src={img}
									className="w-full h-[80vh] object-contain "
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default ProductImageModal;
