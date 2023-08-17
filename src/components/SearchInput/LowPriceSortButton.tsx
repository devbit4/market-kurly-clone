import * as React from 'react';
import styles from '@components/SearchInput/SearchInput.module.css';

type LowPriceSortButtonProps = {
	onClick: () => void;
	children: React.ReactNode;
};

const LowPriceSortButton: React.FC<LowPriceSortButtonProps> = ({ onClick, children }) => {
	return (
		<button className={styles.lowPriceButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default LowPriceSortButton;
