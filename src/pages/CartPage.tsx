import { useState, useEffect } from 'react';

import ProductGroup from '@/components/Cart/ProductGroup';
import ProductPrice from '@/components/Cart/ProductPrice';
import ProductSelectorGroup from '@/components/Cart/ProductSelectorGroup';
import LinkButton from '@/components/LinkButton/LinkButton';
import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './CartPage.module.css';
import axios from 'axios';
import { CartItems, CartProduct, CartProductInfo } from '@/types/CartProduct';

const CartPage = () => {
	const [isAllChecked, setIsAllChecked] = useState(true);
	const [cartProducts, setCartProducts] = useState<CartProductInfo[]>([]);
	const coldCartItems = cartProducts.filter(product => product.storageType === 'COLD');
	const normalCartItems = cartProducts.filter(product => product.storageType !== 'COLD');

	useEffect(() => {
		axios.get(`/dbs/products.json`).then(data => {
			const products: CartProduct[] = data.data.products;
			const cartItems: CartItems[] = JSON.parse(window.localStorage.getItem('cartItems') || '[]');
			const newCartProducts: CartProductInfo[] = [];

			const getProductInfo = (cartInfo: CartItems) => {
				const targetProduct = products.find(product => product.no === cartInfo.dealProductNo);
				if (!targetProduct) return null;
				return { ...targetProduct, quantity: cartInfo.quantity, isChecked: true };
			};

			cartItems.forEach(cartItem => {
				const productInfo = getProductInfo(cartItem);
				if (!productInfo) return;
				if ('quantity' in productInfo) {
					newCartProducts.push(productInfo);
				}
			});

			setCartProducts(newCartProducts);
		});
	}, []);

	const updateAllCheckedState = () => {
		const updatedCartProducts = cartProducts.map(product => {
			return { ...product, isChecked: !isAllChecked };
		});
		setIsAllChecked(!isAllChecked);
		setCartProducts(updatedCartProducts);
	};

	const updateCartProductCheckState = (id: number) => {
		const updatedCartProducts = cartProducts.map(cartProduct => {
			if (cartProduct.no === id) {
				return { ...cartProduct, isChecked: !cartProduct.isChecked };
			}
			return cartProduct;
		});

		const updatedIsAllChecked = updatedCartProducts.every(product => product.isChecked);

		setIsAllChecked(updatedIsAllChecked);
		setCartProducts(updatedCartProducts);
	};

	const increaseProductQuantity = (id: number) => {
		const updatedCartProducts = cartProducts.map(cartProduct => {
			if (cartProduct.no === id) {
				return { ...cartProduct, quantity: cartProduct.quantity + 1 };
			}
			return cartProduct;
		});

		setCartProducts(updatedCartProducts);
	};

	const decreaseProductQuantity = (id: number) => {
		const updatedCartProducts = cartProducts.map(cartProduct => {
			if (cartProduct.no === id) {
				return { ...cartProduct, quantity: cartProduct.quantity - 1 };
			}
			return cartProduct;
		});

		setCartProducts(updatedCartProducts);
	};

	return (
		<Wrapper>
			<h2 className={styles.title}>장바구니</h2>
			<section className={styles.contents}>
				<div>
					<ProductSelectorGroup
						isAllChecked={isAllChecked}
						handleCheckbox={updateAllCheckedState}
					/>
					<ProductGroup
						category='냉장 상품'
						products={coldCartItems}
						increaseProductQuantity={increaseProductQuantity}
						decreaseProductQuantity={decreaseProductQuantity}
						handleProductCheckState={updateCartProductCheckState}
					/>
					<ProductGroup
						category='상온 식품'
						products={normalCartItems}
						increaseProductQuantity={increaseProductQuantity}
						decreaseProductQuantity={decreaseProductQuantity}
						handleProductCheckState={updateCartProductCheckState}
					/>
				</div>
				<div className={styles.price_summary}>
					<ProductPrice />
					<LinkButton type='PRIMARY' url='/login'>
						로그인
					</LinkButton>
					<ul className={styles.notice}>
						<li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
						<li>[마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
					</ul>
				</div>
			</section>
		</Wrapper>
	);
};

export default CartPage;
