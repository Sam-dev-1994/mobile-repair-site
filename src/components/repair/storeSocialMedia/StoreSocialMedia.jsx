import React from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { RiTelegram2Fill } from 'react-icons/ri';

export default function StoreSocialMedia() {
	const socialLinks = [
		{ id: 1, icon: BsInstagram, label: 'اینستاگرام', href: '#' },
		{ id: 2, icon: RiTelegram2Fill, label: 'تلگرام', href: '#' },
		{ id: 3, icon: BsWhatsapp, label: 'واتساپ', href: '#' },
	];

	return (
		<div className="w-1/4 hidden md:block">
			<h3 className="font-bold text-base sm:text-lg  mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-brand-primary pb-1">
				شبکه‌های اجتماعی
			</h3>
			<p className="text-sm  leading-relaxed mb-4">
				ارائه‌دهنده خدمات تعمیرات تخصصی موبایل با استفاده از قطعات
				اورجینال و ضمانت واقعی.
			</p>
			<div className="flex items-center gap-3 text-brand-orange">
				{socialLinks.map((social) => {
					const SocialIcon = social.icon;
					return (
						<a
							key={social.id}
							href={social.href}
							aria-label={social.label}
							className="p-2.5 rounded-xl bg-brand-orange/10 hover:bg-brand-orange hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
						>
							<SocialIcon className="text-lg" />
						</a>
					);
				})}
			</div>
		</div>
	);
}
