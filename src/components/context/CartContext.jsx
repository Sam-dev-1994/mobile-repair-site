import { createContext, useState } from 'react';
import { getProductDataById } from '../services/ProductServices.jsx';

export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	deleteItemFromCart: () => {},
	getTotalAmount: () => {},
});
export function CartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);
	function getProductQuantity(id, color) {
		const quantity = cartProducts.find(
			(item) => item.id === id && item.color === color,
		)?.quantity;
		if (quantity === undefined) {
			return 0;
		}
		return quantity;
	}
	function addItemToCart(id, color, count) {
		const quantity = getProductQuantity(id, color);
		if (quantity === 0) {
			setCartProducts([...cartProducts, { id, color, quantity: count }]);
		} else {
			setCartProducts(
				cartProducts.map((item) =>
					item.id === id && item.color === color
						? {
								...item,
								quantity: item.quantity + count,
							}
						: item,
				),
			);
		}
	}
	function deleteItemFromCart(id, color) {
		setCartProducts((cartProducts) =>
			cartProducts.filter(
				(item) => item.id !== id || item.color !== color,
			),
		);
	}
	function removeItemFromCart(id, color) {
		const quantity = getProductQuantity(id, color);
		if (quantity === 1) deleteItemFromCart(id, color);
		else
			setCartProducts(
				cartProducts.map((item) =>
					item.id === id && item.color === color
						? { ...item, quantity: item.quantity - 1 }
						: item,
				),
			);
	}
	function getTotalAmount() {
		let totalAmount = 0;
		cartProducts.map((item) => {
			const productData = getProductDataById(item.id);
			totalAmount += productData.price * item.quantity;
		});
		return totalAmount;
	}
	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addItemToCart,
		removeItemFromCart,
		deleteItemFromCart,
		getTotalAmount,
	};
	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
}
