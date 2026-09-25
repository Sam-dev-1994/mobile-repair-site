import { FaPhone, FaMapLocationDot } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

export default function FooterContactInfo() {
	const contactDetails = [
		{
			id: 1,
			text: '0912 123 4567',
			href: 'tel:09121234567',
			icon: FaPhone,
			dir: 'ltr',
		},
		{
			id: 2,
			text: 'example@gmail.com',
			href: 'mailto:example@gmail.com',
			icon: SiGmail,
			dir: 'ltr',
		},
		{
			id: 3,
			text: 'تهران، خیابان جمهوری، پاساژ علاءالدین',
			href: 'https://maps.google.com',
			icon: FaMapLocationDot,
			dir: 'rtl',
		},
	];

	return (
		<div className=" w-1/2 md:w-1/4 hidden md:block">
			<h3 className="font-bold text-base sm:text-lg  mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-brand-primary pb-1">
				اطلاعات تماس
			</h3>
			<ul className="flex flex-col gap-2.5 text-sm ">
				{contactDetails.map((item) => {
					const IconComponent = item.icon;
					return (
						<li key={item.id}>
							<a
								href={item.href}
								target={
									item.href.startsWith('http')
										? '_blank'
										: '_self'
								}
								rel="noopener noreferrer"
								className="flex items-center gap-3 py-1  hover:text-brand-orange transition-colors duration-200 group"
							>
								<div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange shrink-0 transition-colors duration-200 group-hover:bg-brand-orange group-hover:text-white">
									<IconComponent className="text-base" />
								</div>
								<span
									dir={item.dir}
									className="leading-relaxed"
								>
									{item.text}
								</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
