export async function getCategories() {
	const response = await fetch(
		`https://dummyjson.com/products/category/smartphones`,
	);
	if (!response.ok) {
		throw new Error('دریافت دسته بندی ها با خطا مواجه شد');
	}
	return response.json();
}
export const categories = [
	{
		id: 1,
		name: 'موبایل',
		slug: 'mobile',
		parent_id: null,
		icon: 'mobile',
	},
	{
		id: 2,
		name: 'گوشی‌های نو',
		slug: 'new',
		parent_id: 1,
	},
	{
		id: 3,
		name: 'گوشی‌های کارکرده',
		slug: 'used',
		parent_id: 1,
	},

	{
		id: 4,
		name: 'تبلت',
		slug: 'tablet',
		parent_id: null,
		icon: 'tablet',
	},
	{
		id: 5,
		name: 'تبلت‌های نو',
		slug: 'new',
		parent_id: 4,
	},
	{
		id: 6,
		name: 'تبلت‌های کارکرده',
		slug: 'used',
		parent_id: 4,
	},

	{
		id: 7,
		name: 'لوازم جانبی',
		slug: 'accessories',
		parent_id: null,
		icon: 'accessories',
	},
	{
		id: 8,
		name: 'قاب و کاور',
		slug: 'cases',
		parent_id: 7,
	},
	{
		id: 9,
		name: 'گلس',
		slug: 'screen-protector',
		parent_id: 7,
	},
	{
		id: 10,
		name: 'شارژر',
		slug: 'chargers',
		parent_id: 7,
	},
	{
		id: 11,
		name: 'کابل',
		slug: 'cables',
		parent_id: 7,
	},
	{
		id: 12,
		name: 'هندزفری',
		slug: 'earphones',
		parent_id: 7,
	},
	{
		id: 13,
		name: 'پاوربانک',
		slug: 'power-banks',
		parent_id: 7,
	},
];
