import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router';
import { CategoryContext } from '../../context/CategoryContext.jsx';
import { categories } from '../../services/CategoryServices.jsx';

export default function CategoryMenu() {
	// const categories = useContext(CategoryContext);
	const [open, setOpen] = useState(false);
	const parentCat = categories.filter((item) => item.parent_id === null);

	return (
		<div
			className="hidden md:block  h-full relative text-nowrap"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<button className="cursor-pointer  h-full px-3 ">
				<FaBars className="inline-block ml-3 text-brand-secondary" />
				دسته بندی ها
			</button>
			{open && (
				<div className="absolute top-full right-0 z-60 w-[620px] rounded-xl border border-neutral-300 shadow-lg shadow-gray-500 p-4 bg-white">
					<div className="max-h-[420px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-3">
						<div className="grid grid-cols-3 gap-2">
							{parentCat.map((category) => (
								<div
									key={category.id}
									className="flex flex-col not-last:border-l  border-neutral-300 p-3"
								>
									<Link
										to={`/category/${category.slug}`}
										className="block text-sm font-bold text-gray-800 transition-colors duration-200 hover:text-brand-orange mb-4 border-b border-neutral-300 pb-3"
									>
										{category.name}
									</Link>
									<div className="space-y-3">
										{categories
											.filter(
												(child) =>
													child.parent_id ===
													category.id,
											)
											.map((child) => (
												<Link
													to={`/category/${category.slug}&filter=${child.slug}`}
													key={child.id}
													className="block text-sm text-gray-700    transition-all duration-200
																 hover:translate-x-1
																 hover:text-brand-secondary"
												>
													{child.name}
												</Link>
											))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
