import { Link } from 'react-router';
import { GoArrowLeft } from 'react-icons/go';
import { SiSamsung } from 'react-icons/si';
import { FaApple } from 'react-icons/fa6';
import { SiXiaomi } from 'react-icons/si';
import './brandCategory.css';

export default function ShopBrandCategories() {
	const categoryData = [
		{
			id: 1,
			title: 'samsung',
			url: '/images/samsung.png',
			color: 'bg-brand-blue',
			icon: <SiSamsung />,
			description: 'محصولات سامسونگ',
		},
		{
			id: 2,
			title: 'apple',
			url: '/images/apple.png',
			color: 'bg-brand-info',
			icon: <FaApple />,
			description: 'محصولات اپل',
		},
		{
			id: 3,
			title: 'xiaomi',
			url: '/images/samsung.png',
			color: 'bg-brand-orange',
			icon: <SiXiaomi />,
			description: 'محصولات شیائومی',
		},
	];
	return (
		<section className="container py-4 px-3 mx-auto">
			<div className="px-3 py-4 text-gray-700">
				<h2 className="text-xl font-bold mb-4 text-gray-700">
					خرید آسان و مطمِئن از میان برندهای محبوب:
				</h2>
				<p className="hidden sm:block">
					محصول مورد علاقه تان را با تضمین اصالت و کیفیت اینجا خریداری
					کنید:
				</p>
			</div>
			<div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
				{categoryData.map((item) => (
					<div
						key={item.id}
						className="w-full  md:basis-1/3 aspect-[5/2] md:aspect-video "
					>
						<Link
							to={`/category/${item.title}`}
							style={{
								backgroundImage: ` url(${item.url})`,
							}}
							className={` h-full p-3 category-bg bg-brand-secondary text-white transition duration-300 hover:shadow-lg hover:shadow-gray-500 flex flex-col justify-center items-start rounded-xl text-[0.9rem] sm:text-xl `}
						>
							<h4 className=" sm:pr-3">
								{item.description}
								<GoArrowLeft className="inline-block mr-2" />
							</h4>
							<span className=" pr-3 mt-1 sm:mt-3 text-3xl sm:text-5xl">
								{item.icon}
							</span>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
