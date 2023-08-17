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

	// const handleOneDayClose = useCallback(() => {}, []);

	useOutSideClick(modalRef, handleClose);

	return (
		<ModalContainer>
			<div className={styles.overlay}>
				<div className={styles.modalWrap} ref={modalRef}></div>
			</div>
		</ModalContainer>
	);
};

export default CartModal;
