import useOutSideClick from '@/hooks/useOutsideClick';

import { useCallback, useRef } from 'react';

import styles from './HomeModal.module.css';

import ModalContainer from './ModalContainer';

type Props = {
	children: React.ReactNode;
	id: string;
	onClose: (id: string) => void;
};

const HomeModal = ({ onClose, id }: Props) => {
	const modalRef = useRef(null);

	const handleClose = useCallback(() => {
		onClose && onClose(id);
	}, [onClose, id]);

	// const handleOneDayClose = useCallback(() => {}, []);

	useOutSideClick(modalRef, handleClose);

	return (
		<ModalContainer>
			<div className={styles.overlay}>
				<div className={styles.modalWrap} ref={modalRef}>
					<img
						src='https://cdn.oasis.co.kr:48581/display/collection/image/collection_veQyLNWu.jpg'
						alt='복숭아'
					/>
					<div className={styles.buttons}>
						{/* <button onClick={handleOneDayClose}>오늘 하루 보지 않기</button> */}
						<button onClick={handleClose}>닫기</button>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default HomeModal;
