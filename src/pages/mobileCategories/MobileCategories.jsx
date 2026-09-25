import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { categories } from '../../components/services/CategoryServices.jsx';

import { BiSolidCategoryAlt } from 'react-icons/bi';
import { FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import { LuCable } from 'react-icons/lu';
function Categories() {
	const icons = {
		mobile: <FaMobileAlt className="text-lg mt-1 " />,
		tablet: <FaTabletAlt className="text-lg mt-1 " />,
		accessories: <LuCable className="text-lg mt-1 " />,
	};

	const parentCategories = categories.filter(
		(category) => category.parent_id === null,
	);

	const [activeCategory, setActiveCategory] = useState(null);

	useEffect(() => {
		if (parentCategories.length > 0 && activeCategory === null) {
			setActiveCategory(parentCategories[0].id);
		}
	}, [parentCategories, activeCategory]);

	const children = categories.filter(
		(category) => category.parent_id === activeCategory,
	);
	const activeParent = categories.find(
		(category) => category.id === activeCategory,
	);

	return (
		<>
			<h3 className="pr-5 text-lg font-bold py-4 text-brand-orange">
				<BiSolidCategoryAlt className="inline-block ml-2 text-xl" />
				دسته بندی ها
			</h3>
			<div className="flex min-h-[70vh] bg-white">
				<div className="w-22 border-l border-gray-200 bg-gray-50 ">
					{parentCategories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`w-full border-b border-gray-200 px-2 py-4  flex flex-col text-[0.7rem] justify-evenly items-center cursor-pointer ${
								activeCategory === category.id
									? 'bg-white font-bold text-brand-secondary'
									: 'text-gray-500'
							}`}
						>
							{category.name}
							{icons[category.icon]}
						</button>
					))}
				</div>
				<div className="flex-1 ">
					{activeParent && (
						<Link
							to={`/category/${activeParent.slug}`}
							className="block border-b border-gray-200 pr-3 py-3  text-[0.7rem]  text-right hover:bg-gray-100 transition duration-300 "
						>
							همه {activeParent.name}&nbsp;ها
						</Link>
					)}
					{children.map((child) => (
						<Link
							key={child.id}
							to={`/category/${child.slug}`}
							className="block border-b border-gray-200 pr-3 py-3  text-[0.7rem]  text-right hover:bg-gray-100 transition duration-300 "
						>
							{child.name}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default Categories;
