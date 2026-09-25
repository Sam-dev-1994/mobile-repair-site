import { createContext, useEffect, useState } from 'react';
import { getCategories } from '../services/CategoryServices.jsx';

export const CategoryContext = createContext({
	items: [],
});
export function CategoryProvider({ children }) {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getCategories().then((data) => setCategories(data.products));
	}, []);
	const contextValue = { items: categories };
	return (
		<CategoryContext.Provider value={contextValue}>
			{children}
		</CategoryContext.Provider>
	);
}
