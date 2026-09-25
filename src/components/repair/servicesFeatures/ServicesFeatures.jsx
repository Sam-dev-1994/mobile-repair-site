import React from 'react';
import { FcInTransit, FcApproval, FcSupport, FcPrivacy } from 'react-icons/fc';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ServicesFeatures() {
	const features = [
		{
			id: 1,
			title: 'ارسال سریع',
			description: 'ارسال سفارش‌ها در کوتاه‌ترین زمان',
			icon: FcInTransit,
		},
		{
			id: 2,
			title: 'ضمانت اصل بودن کالا',
			description: 'تضمین سلامت و اصالت محصولات',
			icon: FcApproval,
		},
		{
			id: 3,
			title: 'تعمیرات تخصصی',
			description: 'تعمیر تخصصی انواع موبایل',
			icon: FcSupport,
		},
		{
			id: 4,
			title: 'پرداخت امن',
			description: 'پرداخت مطمئن و ایمن سفارش‌ها',
			icon: FcPrivacy,
		},
	];

	return (
		<section className="w-full bg-brand-info py-4 ">
			<div className="container mx-auto px-3">
				<div className="block md:hidden w-full">
					<Swiper
						modules={[Autoplay]}
						slidesPerView="auto"
						spaceBetween={20}
						loop={true}
						speed={6000}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}

						className="marquee-swiper ease-linear "
					>
						{[...features, ...features].map((item) => {
							const IconComponent = item.icon;
							return (
								<SwiperSlide className="!w-auto">
									<div
										key={item.id}
										className="flex  flex-col justify-center items-center p-3 text-center gap-2 rounded-2xl transition-all duration-300 hover:bg-white/10  "
									>
										<div className="bg-white p-2 rounded-2xl shadow-xs shrink-0 flex items-center justify-center">
											<IconComponent className="text-3xl sm:text-4xl" />
										</div>
										<div className="flex flex-col gap-1">
											<strong className="text-sm sm:text-base font-bold text-gray-800 ">
												{item.title}
											</strong>
											<p className="text-xs sm:text-sm text-gray-600 leading-snug whitespace-nowrap">
												{item.description}
											</p>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className="hidden md:flex flex-row justify-center items-center  w-full ">
					{features.map((item) => {
						const IconComponent = item.icon;
						return (
							<div
								key={item.id}
								className="flex  flex-col justify-center items-center p-3 text-center gap-2 rounded-2xl transition-all duration-300 hover:bg-white/10  "
							>
								<div className="bg-white p-2 rounded-2xl shadow-xs shrink-0 flex items-center justify-center">
									<IconComponent className="text-3xl sm:text-4xl" />
								</div>
								<div className="flex flex-col gap-1">
									<strong className="text-sm sm:text-base font-bold text-gray-800 ">
										{item.title}
									</strong>
									<p className="text-xs sm:text-sm text-gray-600 leading-snug whitespace-nowrap">
										{item.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
