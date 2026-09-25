export const getProductDataById = async (id) => {
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	try {
		return response.json();
	} catch {
		throw new Error('error fetch');
	}
};

export const colorList = [
	{ id: 1, name: 'مشکی', hex: '#0000' },
	{ id: 2, name: 'سفید', hex: '#ffff' },
	{ id: 3, name: 'نقره ای', hex: '#c0c0c0' },
	{ id: 4, name: 'آبی ملایم', hex: '#add8e6' },
];
