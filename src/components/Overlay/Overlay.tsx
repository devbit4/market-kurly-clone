import styles from './Overlay.module.css';

interface Overlay {
	children: React.ReactNode;
	onClick?: () => void;
}

const Overlay = ({ children, onClick }: Overlay) => {
	return (
		<div className={styles.overlay} onClick={onClick}>
			{children}
		</div>
	);
};

export default Overlay;
