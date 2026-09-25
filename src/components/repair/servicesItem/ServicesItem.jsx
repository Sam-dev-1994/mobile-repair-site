import React from 'react';
import { PiBatteryChargingVertical } from 'react-icons/pi';
import { CiMobile4 } from 'react-icons/ci';
import { BsCpu, BsCamera } from 'react-icons/bs';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';

export default function ServicesItem() {
	const services = [
		{
			id: 1,
			title: 'تعویض باتری',
			description: 'تعویض باتری اصل با گارانتی و ضمانت سلامت',
			icon: PiBatteryChargingVertical,
		},
		{
			id: 2,
			title: 'تعویض ال سی دی',
			description: 'تعویض انواع نمایشگر با کیفیت',
			icon: CiMobile4,
		},
		{
			id: 3,
			title: 'تعمیر برد',
			description: 'تعمیرات تخصصی برد و مشکلات سخت افزاری',
			icon: BsCpu,
		},
		{
			id: 4,
			title: 'تعمیر آب خوردگی',
			description: 'تخصصی ترین تعمیرات برای نجات گوشی شما',
			icon: MdOutlineWaterDrop,
		},
		{
			id: 5,
			title: 'تعویض گلس فنی',
			description: 'تعمیر و احیای ال سی دی معیوب و ترک خورده',
			icon: HiOutlineSpeakerWave,
		},
		{
			id: 6,
			title: 'تعمیر دوربین',
			description: 'رفع مشکلات دوربین جلو و عقب',
			icon: BsCamera,
		},
	];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
			{services.map((item) => {
				const IconComponent = item.icon;
				return (
					<div
						key={item.id}
						className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center px-3 py-5 sm:px-4 sm:py-6 flex flex-col items-center justify-between group"
					>
						<div className="p-3 sm:p-4 rounded-full bg-brand-secondary/10 text-brand-secondary mb-2 transition-transform duration-300 group-hover:scale-110">
							<IconComponent className="text-3xl sm:text-4xl" />
						</div>
						<div className="flex flex-col justify-center flex-grow">
							<h3 className="font-bold text-[0.9rem] sm:text-lg my-1.5 text-gray-800">
								{item.title}
							</h3>
							<p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
								{item.description}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
