import { useState } from 'react';
import {
	FiChevronDown,
	FiChevronUp,
	FiSliders,
	FiX,
	FiCheck,
} from 'react-icons/fi';

const filterSections = [
	{
		id: 'category',
		title: 'دسته‌بندی',
		options: ['موبایل', 'تبلت', 'لوازم جانبی'],
	},
	{
		id: 'brand',
		title: 'برند',
		options: ['Apple', 'Samsung', 'Xiaomi'],
	},
	{
		id: 'condition',
		title: 'وضعیت',
		options: ['نو', 'کارکرده'],
	},
	{
		id: 'storage',
		title: 'حافظه',
		options: ['64GB', '128GB', '256GB', '512GB', '1TB'],
	},
];

function FilterSection({
	title,
	options,
	selectedValues,
	onChange,
	defaultOpen = true,
}) {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<div className="border-b border-gray-100 py-5 last:border-b-0">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="group flex w-full items-center justify-between text-right"
			>
				<span className="text-sm font-bold text-gray-800 transition group-hover:text-[#0f766e]">
					{title}
				</span>

				<span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition group-hover:bg-[#0f766e]/10 group-hover:text-[#0f766e]">
					{open ? (
						<FiChevronUp size={15} />
					) : (
						<FiChevronDown size={15} />
					)}
				</span>
			</button>

			{open && (
				<div className="mt-4 space-y-2.5">
					{options.map((option) => {
						const checked = selectedValues.includes(option);

						return (
							<label
								key={option}
								className="group flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
							>
								<span
									className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border transition ${
										checked
											? 'border-[#0f766e] bg-[#0f766e] text-white'
											: 'border-gray-300 bg-white group-hover:border-[#0f766e]'
									}`}
								>
									{checked && (
										<FiCheck size={12} strokeWidth={3} />
									)}
								</span>

								<input
									type="checkbox"
									checked={checked}
									onChange={() => onChange(option)}
									className="sr-only"
								/>

								<span>{option}</span>
							</label>
						);
					})}
				</div>
			)}
		</div>
	);
}

function PriceFilter({ price, setPrice }) {
	const handleChange = (key, value) => {
		setPrice((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	return (
		<div className="border-b border-gray-100 py-5">
			<h3 className="text-sm font-bold text-gray-800">محدوده قیمت</h3>

			<div className="mt-4 grid grid-cols-2 gap-2.5">
				<div>
					<label className="mb-1.5 block text-[11px] font-medium text-gray-400">
						حداقل قیمت
					</label>

					<div className="relative">
						<input
							type="number"
							value={price.min}
							onChange={(e) =>
								handleChange('min', e.target.value)
							}
							placeholder="۰"
							className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs text-gray-800 outline-none transition placeholder:text-gray-300 focus:border-[#0f766e] focus:bg-white focus:ring-2 focus:ring-[#0f766e]/10"
						/>

						<span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[9px] text-gray-400">
							تومان
						</span>
					</div>
				</div>

				<div>
					<label className="mb-1.5 block text-[11px] font-medium text-gray-400">
						حداکثر قیمت
					</label>

					<div className="relative">
						<input
							type="number"
							value={price.max}
							onChange={(e) =>
								handleChange('max', e.target.value)
							}
							placeholder="∞"
							className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs text-gray-800 outline-none transition placeholder:text-gray-300 focus:border-[#0f766e] focus:bg-white focus:ring-2 focus:ring-[#0f766e]/10"
						/>

						<span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[9px] text-gray-400">
							تومان
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function ProductFilters({
	filters,
	setFilters,
	mobileOpen,
	setMobileOpen,
}) {
	const handleFilterChange = (type, value) => {
		setFilters((prev) => {
			const currentValues = prev[type] || [];

			const exists = currentValues.includes(value);

			return {
				...prev,
				[type]: exists
					? currentValues.filter((item) => item !== value)
					: [...currentValues, value],
			};
		});
	};

	const clearFilters = () => {
		setFilters({
			category: [],
			brand: [],
			condition: [],
			storage: [],
			price: {
				min: '',
				max: '',
			},
		});
	};

	const filterContent = (
		<div className="flex h-full flex-col">
			<div className="flex items-center justify-between border-b border-gray-100 pb-4">
				<button
					type="button"
					onClick={clearFilters}
					className="cursor-pointer rounded-xl border border-brand-red bg-brand-red px-2 py-1 text-[11px] font-medium text-white transition hover:bg-white hover:text-brand-red"
				>
					حذف همه
				</button>
			</div>

			<div className="flex flex-col overflow-y-auto pr-1">
				{filterSections.map((section) => (
					<FilterSection
						key={section.id}
						title={section.title}
						options={section.options}
						selectedValues={filters[section.id] || []}
						onChange={(value) =>
							handleFilterChange(section.id, value)
						}
					/>
				))}

				<PriceFilter
					price={filters.price}
					setPrice={(price) =>
						setFilters((prev) => ({
							...prev,
							price,
						}))
					}
				/>
			</div>

			{/* Mobile Apply */}
			<div className="border-t border-gray-100 bg-white pt-4 md:hidden">
				<button
					type="button"
					onClick={() => setMobileOpen(false)}
					className="w-full rounded-xl bg-[#0f766e] py-3 text-sm font-bold text-white shadow-sm shadow-[#0f766e]/20 transition hover:bg-[#115e59] active:scale-[0.98]"
				>
					نمایش محصولات
				</button>
			</div>
		</div>
	);

	return (
		<>
			{/* ========================= Desktop ========================== */}
			<aside className="hidden w-70 shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:block h-dvh">
				{filterContent}
			</aside>

			{/* ========================= Mobile Drawer ========================== */}
			<div
				className={`fixed inset-0 z-200 transition-opacity duration-300 lg:hidden ${
					mobileOpen
						? 'visible bg-gray-900/40 opacity-100'
						: 'invisible bg-transparent opacity-0'
				}`}
			>
				{/* Overlay */}
				<div
					className={`absolute inset-0 backdrop-blur-[2px] transition-all duration-300 ${
						mobileOpen ? 'bg-gray-900/40' : 'bg-transparent'
					}`}
					onClick={() => setMobileOpen(false)}
				/>

				{/* Drawer */}
				<div
					className={`absolute bottom-0 left-0 right-0 flex max-h-[90vh] flex-col overflow-hidden rounded-t-3xl bg-white p-5 shadow-2xl transition-transform duration-300 ease-out overflow-y-scroll ${
						mobileOpen ? 'translate-y-0' : 'translate-y-full'
					}`}
				>
					{/* Mobile Header */}
					<div className="mb-5 flex items-center justify-between">
						<div className="flex items-center gap-2.5">
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f766e]/10 text-[#0f766e]">
								<FiSliders size={16} />
							</span>

							<h2 className="text-base font-extrabold text-gray-900">
								فیلتر محصولات
							</h2>
						</div>

						<button
							type="button"
							onClick={() => setMobileOpen(false)}
							className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition hover:bg-[#ea580c]/10 hover:text-[#ea580c]"
						>
							<FiX size={19} />
						</button>
					</div>

					{filterContent}
				</div>
			</div>
		</>
	);
}
