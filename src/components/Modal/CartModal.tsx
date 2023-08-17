import useOutSideClick from '@/hooks/useOutsideClick';

import { useCallback, useRef } from 'react';

import ModalContainer from './ModalContainer';

import styles from './CartModal.module.css';

import { Product } from '@/pages/MainPage';

type Props = {
	children: React.ReactNode;
	id: string;
	product: Product;
	onClose: (id: string) => void;
};

const CartModal = ({ onClose, id, product }: Props) => {
	const modalRef = useRef(null);

	window.console.log(product);

	const handleClose = useCallback(() => {
		onClose && onClose(id);
	}, [onClose, id]);

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
									<span>{product.discounted_price}원</span>
									<span>{product.sales_price}원</span>
								</div>
								{/* <div className={styles.productQuantity}>
								<button></button>
								<div>1</div>
								<button></button>
							</div> */}
							</div>
						</div>
						<div className={styles.cartPrice}>
							<div className={styles.cartPriceDetail}>
								<p>합계</p>
								<div>
									<span>0</span>
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
							<button className={styles.addButton}>장바구니 담기</button>
						</div>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default CartModal;
