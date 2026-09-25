import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import ProductCard from '../productCard/ProductCard.jsx';

import 'swiper/css';
import { FaChevronLeft } from 'react-icons/fa';

function NextButton() {
	const swiper = useSwiper();
	return (
		<button
			onClick={() => swiper.slideNext(500)}
			className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white shadow-md text-neutral-600 hover:bg-neutral-50 transition absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
			aria-label="بعدی"
		>
			<FaChevronLeft />
		</button>
	);
}

export default function ProductsSlider({ products, isLoading }) {
	return (
		<div className="relative px-2">
			<Swiper
				modules={[A11y]}
				spaceBetween={12}
				slidesPerView={1.2}
				breakpoints={{
					320: { slidesPerView: 2 },
					640: { slidesPerView: 3 },
					768: { slidesPerView: 4 },
					1024: { slidesPerView: 5 },
				}}
				autoHeight={false}
				style={{ paddingBottom: '20px', paddingTop: '10px' }}
			>
				{isLoading &&
					Array.from({ length: 5 }).map((_, index) => (
						<SwiperSlide key={index}>
							<ProductCard />
						</SwiperSlide>
					))}
				{products &&
					products.length > 0 &&
					products.map((product) => (
						<SwiperSlide key={product.id} className="!h-auto flex">
							<div className="w-full h-full flex flex-col">
								<ProductCard
									product={product}
									isLoading={isLoading}
								/>
							</div>
						</SwiperSlide>
					))}

				<NextButton />
			</Swiper>
		</div>
	);
}
