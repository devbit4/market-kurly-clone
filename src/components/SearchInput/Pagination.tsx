import * as React from 'react';
import styles from '@components/SearchInput/SearchInput.module.css';
type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
	buttonClassName: string;
	activeButtonClassName: string;
};

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
	buttonClassName,
	activeButtonClassName,
}) => {
	const pageButtons = [];

	for (let page = 1; page <= totalPages; page++) {
		const isActive = page === currentPage;
		const buttonClass = isActive ? activeButtonClassName : buttonClassName;

		pageButtons.push(
			<button
				key={page}
				className={`${styles.paginationButton} ${styles[buttonClass]}`}
				onClick={() => onPageChange(page)}
			>
				{page}
			</button>
		);
	}

	return (
		<div className={styles.paginationContainer}>
			<button
				className={`${styles.paginationButton} ${styles[buttonClassName]} ${
					currentPage === 1 ? styles.dimmed : ''
				}`}
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				&lt;
			</button>
			{pageButtons}
			<button
				className={`${styles.paginationButton} ${styles[buttonClassName]} ${
					currentPage === totalPages ? styles.dimmed : ''
				}`}
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
