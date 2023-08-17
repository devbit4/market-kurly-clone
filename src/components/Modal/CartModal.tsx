import { useCallback, useRef, useState } from 'react';

import ModalContainer from '@components/Modal/ModalContainer';
import Counter from '@components/Counter/Counter';
import useOutSideClick from '@/hooks/useOutsideClick';
import { Product } from '@/pages/MainPage';

import styles from './CartModal.module.css';
import { convertNumberFormat } from '@/utils/convertNumberFormat';

type Props = {
	children: React.ReactNode;
	id: string;
	product: Product;
	onClose: (id: string) => void;
};

interface CartItems {
	dealProductNo: number;
	quantity: number;
}

const CartModal = ({ onClose, id, product }: Props) => {
	const [quantity, setQuantity] = useState(0);
	const modalRef = useRef(null);
	const price = product.discounted_price ?? product.sales_price;
	const totalPrice = price * quantity;

	const increaseQuantity = () => setQuantity(prevQ => prevQ + 1);
	const decreaseQuantity = () => setQuantity(prevQ => prevQ - 1);

	const handleClose = useCallback(() => {
		onClose && onClose(id);
	}, [onClose, id]);

	const handleAddButton = () => {
		let cartItems: CartItems[] = JSON.parse(window.localStorage.getItem('cartItems') ?? '[]');
		const productIndexInCart = cartItems.findIndex(
			cartItem => cartItem.dealProductNo === product.no
		);

		if (productIndexInCart >= 0) {
			cartItems[productIndexInCart].quantity += quantity;
		} else {
			cartItems = [...cartItems, { dealProductNo: product.no, quantity: quantity }];
		}

		window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
		onClose(id);
	};

	useOutSideClick(modalRef, handleClose);

	return (
		<ModalContainer>
			<div className={styles.overlay}>
				<div className={styles.modalWrap} ref={modalRef}>
					<div className={styles.cartWrap}>
						<div className={styles.info}>
							<div className={styles.cartTitle}>
								<span>{product.name}</span>
							</div>
							<div className={styles.cartInfo}>
								<div className={styles.productPrice}>
									<span>{convertNumberFormat(product.discounted_price)}원</span>
									<span>{convertNumberFormat(product.sales_price)}원</span>
								</div>
								<Counter
									className={styles.counter}
									quantity={quantity}
									increateQuantity={increaseQuantity}
									decreaseQuantity={decreaseQuantity}
								/>
							</div>
						</div>
						<div className={styles.cartPrice}>
							<div className={styles.cartPriceDetail}>
								<p>합계</p>
								<div>
									<span>{convertNumberFormat(totalPrice)}</span>
									<span>원</span>
								</div>
							</div>
							<div className={styles.cartGuide}>
								<span>적립</span>
								<p>로그인 후,적립 혜택 제공</p>
							</div>
						</div>
						<div className={styles.cartButtons}>
							<button className={styles.cancelButton} onClick={handleClose}>
								취소
							</button>
							<button className={styles.addButton} onClick={handleAddButton}>
								장바구니 담기
							</button>
						</div>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default CartModal;
