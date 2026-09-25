import { Link } from 'react-router';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { SiSamsung } from 'react-icons/si';
import { FaApple } from 'react-icons/fa6';
import { SiXiaomi } from 'react-icons/si';
import 'swiper/css';
import './brandCategory.css';
import { FaChevronLeft } from 'react-icons/fa';
function NextButton() {
	const swiper = useSwiper();
	return (
		<button
			onClick={() => swiper.slideNext(500)}
			className="flex items-center justify-center w-7 h-7 rounded-full border border-neutral-200 bg-neutral-100 text-gray-400 hover:bg-neutral-300 transition  absolute left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer md:hidden"
		>
			<FaChevronLeft />
		</button>
	);
}

export default function ShopBrandCategories() {
	const categoryData = [
		{
			id: 1,
			title: 'samsung',
			url: `${import.meta.env.BASE_URL}images/samsung-logo.webp`,
			color: 'bg-brand-blue',
			icon: <SiSamsung />,
			description: 'سامسونگ',
		},
		{
			id: 2,
			title: 'apple',
			url: `${import.meta.env.BASE_URL}images/apple-logo.webp`,
			color: 'bg-brand-info',
			icon: <FaApple />,
			description: 'اپل',
		},
		{
			id: 3,
			title: 'xiaomi',
			url: `${import.meta.env.BASE_URL}images/Xiaomi-logo.png`,
			color: 'bg-brand-orange',
			icon: <SiXiaomi />,
			description: 'شیائومی',
		},
		,
		{
			id: 4,
			title: 'google pixel',
			url: `${import.meta.env.BASE_URL}images/pixel-logo.webp`,
			color: 'bg-brand-orange',
			icon: <SiXiaomi />,
			description: 'گوگل',
		},
	];
	return (
		<section className="container py-4 px-3 mx-auto">
			<div className="px-3 py-4 text-gray-700">
				<h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-700 text-center">
					برندهای محبوب
					<span className="block w-10 h-[1px] mx-auto mt-2 bg-brand-orange"></span>
				</h2>
			</div>
			<div className="relative  ">
				<Swiper
					modules={[A11y]}
					spaceBetween={15}
					slidesPerView={2}
					scrollbar={{ draggable: true }}
					breakpoints={{
						479: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 6,
						},
					}}
					style={{
						paddingBottom: '20px',
					}}
					className="md:[&_.swiper-wrapper]:!justify-center"
				>
					{categoryData.map((item) => (
						<SwiperSlide>
							<div key={item.id} className=" aspect-square   ">
								<Link
									to={`category/${item.title} `}
									className="flex flex-col justify-evenly items-center w-full h-full border border-neutral-300 p-2 sm:p-4 rounded-lg transition duration-300 hover:shadow-lg shadow-gray-400 bg-white"
								>
									<img
										loading="lazy"
										src={item.url}
										alt={item.title}
										className=" block h-10 sm:h-15 lg:h-20 mx-auto object-contain "
									/>
									<strong className="text-gray-700 text-sm md:text-xl">
										{item.description}
									</strong>
								</Link>
							</div>
						</SwiperSlide>
					))}
					<NextButton />
				</Swiper>
			</div>
		</section>
	);
}
