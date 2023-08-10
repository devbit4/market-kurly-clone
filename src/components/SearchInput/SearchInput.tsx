import styles from './SearchInput.module.css';

const SearchInput = () => {
	return (
		<div className={styles.search}>
			<input type='search' placeholder='검색어를 입력해주세요' className={styles.search_input} />
			<button type='button' className={styles.search_btn}>
				<span className='sr_only'>검색하기</span>
			</button>
		</div>
	);
};

export default SearchInput;
