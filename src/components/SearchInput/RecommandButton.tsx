import * as React from 'react';
import styles from '@components/SearchInput/SearchInput.module.css';

type RecommandButtonProps = {
	onClick: () => void;
	children: React.ReactNode;
};

const RecommandButton: React.FC<RecommandButtonProps> = ({ onClick, children }) => {
	return (
		<button className={styles.recommandButton} onClick={onClick}>
			{children}
		</button>
	);
};

export default RecommandButton;
