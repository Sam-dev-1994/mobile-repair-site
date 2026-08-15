import React from 'react';

export default function SupportedBrands() {
	//${import.meta.env.BASE_URL}
	const logoData = [
		{
			id: 1,
			type: 'logo',
			title: 'samsung',
			url: `/images/samsung.webp`,
		},
		{
			id: 2,
			type: 'logo',
			title: 'apple',
			url: `/images/apple.webp`,
		},
		{
			id: 6,
			type: 'logo',
			title: 'xiaomi',
			url: `/images/xiaomi.webp`,
		},
		{
			id: 8,
			type: 'text',
			text: 'و دیگر برند ها',
		},
	];
	return (
		<div className="container mx-auto py-4 px-3 w-full text-white bg-dark-bg">
			<div>
				<h4 className="text-lg sm:text-2xl mx-auto mb-6  text-center">
					برند هایی که تعمیر میکنیم
				</h4>
			</div>
			<div className="flex flex-wrap justify-center items-center ">
				{logoData.map((item) => (
					<div
						key={item.id}
						className="bg-dark-bg p-2 w-1/2 aspect-[5/2] flex justify-center items-center sm:w-1/4 lg:w-[12.5%] "
					>
						{item.type === 'logo' ? (
							<img
								src={item.url}
								alt={item.title}
								className="w-full h-full object-contain bg-white  rounded-3xl "
							/>
						) : (
							<p className="text-black font-bold text-sm sm:text-lg bg-white rounded-3xl w-full h-full flex justify-center items-center">
								{item.text}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
