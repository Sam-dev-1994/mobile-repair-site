import { PiMedalBold } from 'react-icons/pi';
import { GiAutoRepair } from 'react-icons/gi';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function Features() {
	const featureList = [
		{ id: 1, title: 'قطعات اورجینال', icon: PiMedalBold },
		{ id: 2, title: 'تعمیر در حضور شما', icon: GiAutoRepair },
		{ id: 3, title: 'ضمانت و گارانتی', icon: MdOutlineVerifiedUser },
		{ id: 4, title: 'تحویل سریع', icon: RxLapTimer },
	];

	return (
		<div className="w-full sm:hidden bg-dark-bg text-white border-t border-brand-gray/30 px-4 py-5 text-xs font-medium">
			<div className="container mx-auto">
				<Swiper
					modules={[Autoplay]}
					slidesPerView={1.5}
					spaceBetween={30}
					loop={true}
					speed={5000}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
					className="marquee-swiper ease-linear"
				>
					{featureList.map((item) => {
						const IconComponent = item.icon;
						return (
							<SwiperSlide>
								<div
									key={item.id}
									className="flex items-center justify-center gap-1 rounded-xl p-3 bg-dark-bg/50 backdrop-blur-sm shadow-sm transition-all duration-200 "
								>
									<IconComponent className="text-brand-secondary text-xl shrink-0 ml-2" />
									<span className="text-gray-200 whitespace-nowrap">
										{item.title}
									</span>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
