import styles from './SearchInput.module.css';
import * as React from 'react';
import { useState } from 'react';

type SearchInputProps = {
	onSearch: (query: string) => void; // 부모 컴포넌트로 검색어 전달하는 콜백 함수
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = () => {
		onSearch(searchQuery); // 검색 쿼리를 부모 컴포넌트로 전달
	};

	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='검색어를 입력해주세요'
				className={styles.input_search}
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			<button type='button' className={styles.btn_search} onClick={handleSearch}>
				<span className='sr_only'>검색하기</span>
			</button>
		</div>
	);
};

export default SearchInput;
