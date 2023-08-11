import useOutSideClick from '@/hooks/useOutsideClick';
import { useCallback, useRef } from 'react';
import styles from './Modal.module.css';
import ModalContainer from './ModalContainer';

type Props = {
	children: React.ReactNode;
	onClose: () => void;
	onSubmit: () => void;
};

const Modal = ({ children, onClose, onSubmit }: Props) => {
	const modalRef = useRef(null);

	const handleClose = useCallback(() => {
		onClose && onClose();
	}, [onClose]);

	useOutSideClick(modalRef, handleClose);

	return (
		<ModalContainer>
			<div className={styles.overlay}>
				<div className={styles.modalWrap} ref={modalRef}>
					<div className={styles.closeButton} onClick={handleClose}>
						닫기
					</div>
					<div className={styles.closeButton} onClick={onSubmit}>
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
