export default function QuickLinks() {
	const linksList = [
		{ id: 1, title: 'خانه', href: '/' },
		{ id: 2, title: 'درباره ما', href: '/about' },
		{ id: 3, title: 'تماس با ما', href: '/contact' },
	];

	return (
		<div className="w-1/2 md:w-1/4">
			<h3 className="font-bold text-[0.8rem] sm:text-base sm:text-lg  mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-brand-primary pb-1">
				دسترسی سریع
			</h3>
			<ul className="flex flex-col gap-2 text-[0.7rem] sm:text-sm ">
				{linksList.map((link) => (
					<li key={link.id}>
						<a
							href={link.href}
							className="inline-block py-1 transition-all duration-200 hover:text-brand-primary hover:translate-x-[-4px]"
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
