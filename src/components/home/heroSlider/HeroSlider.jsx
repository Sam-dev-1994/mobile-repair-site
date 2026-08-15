import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import './heroSlider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// ${import.meta.env.BASE_URL}
const defaultSlides = [
	{
		id: 1,
		title: 'تعمیرات تخصصی',
		titleHighLight: ' انواع تلفن همراه',
		description:
			'ارائه خدمات تعمیرات موبایل با دقت, سرعت و استفاده از قطعات با کیفیت.',
		image: `/images/slider_1.webp`,
	},
	{
		id: 2,
		title: 'ارائه خدمات ',
		titleHighLight: ' همراه با ضمانت',
		description: 'تعویض ال سی دی با قطعات با کیفیت و ضمانت یکماهه',
		image: `/images/slider_2.jpg`,
	},
	{
		id: 3,
		title: 'خدمات تخصصی در',
		titleHighLight: ' پاساژ علاءالدین',
		description: 'ارائه خدمات در معتبرترین مرکز موبایل تهران',
		image: `/images/slider_3.webp`,
	},
];

export default function RtlCarousel({ slides = defaultSlides }) {
	return (
		<div
			className="container w-full h-[50vh] sm:h-64  md:h-96 lg:h-130 mx-auto  select-none "
			dir="rtl"
		>
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={true}
				pagination={{ clickable: true }}
				speed={1400}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				className="w-full h-full px-3 text-right text-white"
			>
				{slides.map((slide) => (
					<SwiperSlide
						key={slide.id}
						className="flex flex-col justify-center items-center sm:relative w-full h-full overflow-hidden bg-dark-bg "
					>
						<div className="relative sm:absolute inset-0 w-full object-cover h-2/3 sm:h-auto">
							<img
								src={slide.image}
								alt={slide.title}
								className="inset-0 w-full h-full object-cover "
							/>
							<div className="shape "></div>
						</div>
						<div className="flex flex-col sm:absolute sm:h-full justify-center sm:items-start text-center sm:text-right sm:pr-12 mt-5 sm:mt-0 z-10 hero-content">
							<h3 className="text-xl sm:text-3xl font-bold mb-2 md:mb-3 drop-shadow-m max-w-9/12  sm:max-w-7/12 lg:max-w-10/12 leading-12 mx-auto sm:m-0">
								{slide.title}
								<span className="text-brand-primary">
									{slide.titleHighLight}
								</span>
							</h3>
							<p className="text-sm sm:text-base drop-shadow-sm max-w-9/12 sm:max-w-1/2 mx-auto sm:m-0">
								{slide.description}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
