import styles from './SearchInput.module.css';

const SearchInput = () => {
	return (
		<div className={styles.search}>
			<input type='text' placeholder='검색어를 입력해주세요' className={styles.input_search} />
			<button type='button' className={styles.btn_search}>
				<span className='sr_only'>검색하기</span>
			</button>
		</div>
	);
};

export default SearchInput;
