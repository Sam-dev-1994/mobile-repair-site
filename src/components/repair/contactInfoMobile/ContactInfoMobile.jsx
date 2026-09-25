import { FaPhone } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { FaMapLocationDot } from 'react-icons/fa6';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { RiTelegram2Fill } from 'react-icons/ri';

export default function ContactInfoMobile() {
	const contactList = [
		{
			id: 1,
			title: '0912 123 4567',
			href: 'tel:09121234567',
			icon: FaPhone,
			dir: 'ltr',
		},
		{
			id: 2,
			title: 'example@gmail.com',
			href: 'mailto:example@gmail.com',
			icon: SiGmail,
			dir: 'ltr',
		},
		{
			id: 3,
			title: 'تهران، خیابان جمهوری، پاساژ علاءالدین',
			href: 'https://maps.google.com',
			icon: FaMapLocationDot,
			dir: 'rtl',
		},
	];

	const socialLinks = [
		{ id: 1, icon: BsInstagram, label: 'اینستاگرام', href: '#' },
		{ id: 2, icon: RiTelegram2Fill, label: 'تلگرام', href: '#' },
		{ id: 3, icon: BsWhatsapp, label: 'واتساپ', href: '#' },
	];

	return (
		<div className="w-full overflow-hidden px-4 md:hidden">
			<div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 text-center">
				<div className="flex flex-col gap-2.5 mb-5">
					{contactList.map((item) => {
						const IconComponent = item.icon;
						return (
							<a
								key={item.id}
								href={item.href}
								target={
									item.href.startsWith('http')
										? '_blank'
										: '_self'
								}
								rel="noopener noreferrer"
								className="flex flex-col min-[220px]:flex-row items-center justify-start gap-3 p-1 rounded-xl bg-gray-50/80 hover:bg-brand-secondary/10 text-gray-700 hover:text-brand-secondary transition-all duration-200 group w-full min-w-0"
							>
								<div className="p-2 rounded-lg bg-white shadow-xs text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-200 shrink-0">
									<IconComponent className="text-base" />
								</div>
								<span
									dir={item.dir}
									className="font-semibold text-xs sm:text-sm text-right leading-relaxed  group-hover:-translate-x-1 transition-transform duration-200"
								>
									{item.title}
								</span>
							</a>
						);
					})}
				</div>

				<div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100 text-brand-secondary">
					{socialLinks.map((social) => {
						const SocialIcon = social.icon;
						return (
							<a
								key={social.id}
								href={social.href}
								aria-label={social.label}
								className="p-3 rounded-2xl bg-brand-secondary/10 hover:bg-brand-secondary hover:text-white active:scale-95 transition-all duration-200 shadow-xs"
							>
								<SocialIcon className="text-lg" />
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
