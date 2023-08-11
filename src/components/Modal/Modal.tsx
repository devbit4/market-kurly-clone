import useOutSideClick from '@/hooks/useOutsideClick';
import { useCallback, useRef } from 'react';
import styles from './Modal.module.css';
import ModalContainer from './ModalContainer';

type Props = {
	children: React.ReactNode;
	onClose: () => void;
	onSubmit: () => void;
	id: string;
};

const Modal = ({ children, onClose, onSubmit, id }: Props) => {
	const modalRef = useRef(null);

	window.console.log(id);
	const handleClose = useCallback(() => {
		onClose && onClose(id);
	}, [onClose]);

	const handleSubmit = useCallback(() => {
		onSubmit && onSubmit();
	}, [onSubmit]);

	// useOutSideClick(modalRef, handleClose);

	return (
		<ModalContainer>
			<div className={styles.overlay}>
				<div className={styles.modalWrap} ref={modalRef}>
					<div className={styles.closeButton} onClick={handleClose}>
						닫기
					</div>

					<div className={styles.closeButton} onClick={handleSubmit}>
						제출
					</div>

					<div className={styles.content}>
						<h1> {children}</h1>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Modal;
