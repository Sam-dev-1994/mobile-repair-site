export default function FooterServices() {
	const servicesList = [
		{ id: 1, title: 'تعویض ال سی دی', href: '#' },
		{ id: 2, title: 'تعویض باتری', href: '#' },
		{ id: 3, title: 'تعمیر آب خوردگی', href: '#' },
		{ id: 4, title: 'تعمیر برد', href: '#' },
		{ id: 5, title: 'سایر خدمات', href: '#' },
	];

	return (
		<div className="w-1/2 md:w-1/4">
			<h3 className="font-bold text-[0.8rem] sm:text-base sm:text-lg mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-brand-primary pb-1">
				خدمات
			</h3>
			<ul className="flex flex-col gap-2 text-[0.7rem] sm:text-sm ">
				{servicesList.map((service) => (
					<li
						key={service.id}
						className="py-1 transition-all duration-200 hover:text-brand-orange hover:translate-x-[-4px]"
					>
						{service.title}
					</li>
				))}
			</ul>
		</div>
	);
}
