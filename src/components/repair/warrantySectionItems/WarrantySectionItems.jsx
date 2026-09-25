import React from 'react';
import { GoShieldCheck } from 'react-icons/go';
import { VscCircuitBoard } from 'react-icons/vsc';
import { FiBatteryCharging } from 'react-icons/fi';
import { FaRegEye } from 'react-icons/fa';

export default function WarrantySectionItems() {
	const warrantyData = [
		{
			id: 1,
			title: 'ضمانت یک‌ماهه تعمیر برد',
			description:
				'تمامی خدمات تخصصی مربوط به تعمیرات برد سخت‌افزاری تا یک‌ماه شامل گارانتی و پشتیبانی کامل ما می‌باشد.',
			icon: VscCircuitBoard,
		},
		{
			id: 2,
			title: 'یک‌ماه گارانتی تعویض باتری',
			description:
				'تعویض باتری با تضمین کارایی انجام شده و سلامت قطعه جدید به مدت یک‌ماه واجد شرایط گارانتی است.',
			icon: FiBatteryCharging,
		},
		{
			id: 3,
			title: 'تضمین اصالت و کیفیت قطعات',
			description:
				'این مجموعه اصالت کالا و انطباق قطعات به‌کار رفته با استانداردهای اصلی سازنده را به‌طور کامل تضمین می‌نماید.',
			icon: GoShieldCheck,
		},
		{
			id: 4,
			title: 'ضمانت واقعی قطعات تعویضی',
			description:
				'بررسی اولیه و عیب‌یابی کاملاً شفاف انجام می‌شود؛ قطعات حساس در حضور شما تست و تحویل داده می‌شوند.',
			icon: FaRegEye,
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
			{warrantyData.map((item) => {
				const IconComponent = item.icon;
				return (
					<div
						key={item.id}
						className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center sm:text-center gap-4 group"
					>
						<div className="p-3.5 rounded-2xl bg-brand-secondary/10 text-brand-secondary shrink-0 transition-transform duration-300 group-hover:scale-110">
							<IconComponent className="text-3xl sm:text-4xl" />
						</div>

						<div className="flex flex-col justify-center">
							<h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1.5 leading-snug">
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
