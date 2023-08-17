import Overlay from '@components/Overlay/Overlay';

import styles from './Alert.module.css';

interface Alert {
	text: string;
	onConfirm: () => void;
}

const Alert = ({ text, onConfirm }: Alert) => {
	return (
		<Overlay onClick={onConfirm}>
			<div className={styles.alert}>
				<p>{text}</p>
				<div className={styles.btn_wrapper}>
					<button type='button' onClick={onConfirm} className={styles.btn_confirm}>
						확인
					</button>
				</div>
			</div>
		</Overlay>
	);
};

export default Alert;
