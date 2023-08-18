import { createContext, useState, useEffect } from 'react';

interface CartItemProvider {
	children: React.ReactNode;
}

export const CartItemContext = createContext({
	value: 0,
	updateCartItem: (value: number) => {
		value;
	},
});

const CartItemProvider = ({ children }: CartItemProvider) => {
	const [cartItemLength, setCartItemLength] = useState(0);

	const updateCartItem = (value: number) => {
		setCartItemLength(value);
	};

	useEffect(() => {
		const currentValue = JSON.parse(window.localStorage.getItem('cartItems') || '[]');
		setCartItemLength(currentValue.length);
	}, []);

	return (
		<CartItemContext.Provider value={{ value: cartItemLength, updateCartItem }}>
			{children}
		</CartItemContext.Provider>
	);
};

export default CartItemProvider;
