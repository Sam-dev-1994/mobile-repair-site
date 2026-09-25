import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ShopHeroSlider() {
	const images = [
		`${import.meta.env.BASE_URL}images/hero_slider_1.webp`,
		`${import.meta.env.BASE_URL}images/hero_slider_2.webp`,
		`${import.meta.env.BASE_URL}images/hero_slider_3.webp`,
	];

	return (
		<section className=" w-full  overflow-hidden text-white ">
			<Swiper
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
				navigation
				spaceBetween={0}
				speed={3000}
				slidesPerView={1}
				loop={true}
				effect={'fade'}
				fadeEffect={{ crossFade: true }}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
			>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<div className="w-full h-56  sm:h-70 md:h-86 lg:h-100 xl:h-130">
							<img
								fetchPriority={index === 0 ? 'high' : 'auto'}
								loading={index === 0 ? 'eager' : 'lazy'}
								src={img}
								className="w-full  h-full object-cover "
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
