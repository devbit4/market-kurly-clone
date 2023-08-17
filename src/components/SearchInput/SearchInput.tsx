import { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

interface SearchInput {
	isScrolled: boolean;
}

const SearchInput = ({ isScrolled }: SearchInput) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const [value, setValue] = useState('');

	const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const deleteSearchValue = () => {
		setValue('');
	};

	const submitSearchValue = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isSearchPage = location.pathname === '/search';
		if (!isSearchPage) {
			navigate(`/search?sword=${value}`);
		} else {
			setSearchParams({ sword: value });
		}
	};

	useEffect(() => {
		const searchQuery = searchParams.get('sword');
		const searchValue = searchQuery ? searchQuery : '';
		setValue(() => searchValue);
	}, [searchParams]);

	return (
		<form
			className={`${styles.search} ${isScrolled ? styles.active : ''}`}
			onSubmit={submitSearchValue}
		>
			<input
				type='text'
				placeholder='검색어를 입력해주세요'
				className={styles.input_search}
				onChange={handleSearchValue}
				value={value}
			/>
			{value.length > 0 && (
				<button type='button' className={styles.btn_reset} onClick={deleteSearchValue}>
					<span className='sr_only'>삭제하기</span>
				</button>
			)}
			<button type='submit' className={styles.btn_search}>
				<span className='sr_only'>검색하기</span>
			</button>
		</form>
	);
};

export default SearchInput;
