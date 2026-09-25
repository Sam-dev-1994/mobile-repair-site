import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';

function MainSlider({ images, onImageClick, onSlideChange }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<div className="w-full rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.12)] mb-3">
				<Swiper
					modules={[Thumbs, Navigation]}
					navigation
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed
								? thumbsSwiper
								: null,
					}}
					onSlideChange={(swiper) =>
						onSlideChange(swiper.activeIndex)
					}
				>
					{images.map((img, index) => (
						<SwiperSlide key={index}>
							<div className="w-full flex justify-center items-center">
								<img
									src={img}
									onClick={onImageClick}
									className=" w-full aspect-square object-contain cursor-zoom-in "
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<Swiper
				modules={[Thumbs]}
				onSwiper={setThumbsSwiper}
				slidesPerView={4}
				spaceBetween={10}
				watchSlidesProgress
			>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<div className="border border-neutral-300 shadow-lg h-full w-full rounded-lg p-1 cursor-pointer">
							<img src={img} className="w-full object-cover" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default MainSlider;
