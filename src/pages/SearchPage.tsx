// 필요한 모듈과 컴포넌트 import
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
// import SearchInput from '@/components/SearchInput/SearchInput';
import Wrapper from '@/components/Wrapper/Wrapper';
import ProductList from '@/components/Product/ProductList';
import Pagination from '@/components/SearchInput/Pagination';
import SortButton from '@/components/SearchInput/RecommandButton';
import HighPriceSortButton from '@components/SearchInput/HighPriceSortButton';
import styles from '@components/SearchInput/SearchInput.module.css';
import LowPriceSortButton from '@/components/SearchInput/LowPriceSortButton';

// 상품 타입을 정의
type ProductType = {
	no: number;
	name: string;
	discount_rate: number;
	sales_price: number;
	discounted_price: number;
	review_count: string;
	list_image_url: string;
	category: number;
};

// 배너 타입을 정의
export type BannerType = {
	image_url: string;
};

// 페이지 당 표시할 아이템 수를 정의
const ITEMS_PER_PAGE = 4; // Number of items to display per page

// SearchPage 컴포넌트를 정의
const SearchPage = () => {
	// 상태 변수들을 선언
	const [banners, setBanners] = useState();
	const [selectedCategory] = useState(100);
	const [categories, setCategories] = useState<ProductType[]>([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
	const [, setHighSortType] = useState<'default' | 'highToLow'>('default');
	const [, setLowSortType] = useState<'default' | 'lowToHigh'>('default');
	const [currentPage, setCurrentPage] = useState(1);

	// 선택된 카테고리에 해당하는 상품을 필터링하여 가져오는 함수를 선언
	const selectedProducts = useMemo(() => {
		return categories?.filter(item => item.category === selectedCategory);
	}, [categories, selectedCategory]);

	// 컴포넌트가 마운트될 때 배너와 카테고리 데이터를 가져오는 효과를 정의
	useEffect(() => {
		axios.get(`/dbs/mainBanner.json`).then(data => {
			setBanners(data.data.products);
		});
	}, []);

	useEffect(() => {
		axios.get(`/dbs/category.json`).then(data => {
			setCategories(data.data.products);
		});
	}, []);

	// 검색어에 따라 상품을 필터링하여 보여주는 효과를 정의
	useEffect(() => {
		if (searchQuery) {
			const filtered = selectedProducts?.filter(item =>
				item.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
			setFilteredProducts(filtered || []);
		} else {
			setFilteredProducts(selectedProducts || []);
		}
	}, [selectedProducts, searchQuery]);

	// // 검색 기능을 위한 함수
	const handleConfirmSearch = (query: string) => {
		setSearchQuery(query); // 검색 쿼리 업데이트
	};

	// 검색 데이터 가져오기
	useEffect(() => {
		if (searchQuery) {
			handleConfirmSearch(searchQuery);
		}
	}, [searchQuery]);

	// '높은가격순' 버튼 클릭 시 상품을 높은 가격순으로 정렬하는 함수를 정의
	const handleSortHighToLow = () => {
		setHighSortType('highToLow');
		const sorted = [...filteredProducts].sort((a, b) => b.sales_price - a.sales_price);
		setFilteredProducts(sorted);
	};

	// '낮은가격순' 버튼 클릭 시 상품을 낮은 가격순으로 정렬하는 함수를 정의
	const handleSortLowToHigh = () => {
		setLowSortType('lowToHigh');
		const sorted = [...filteredProducts].sort((a, b) => a.sales_price - b.sales_price);
		setFilteredProducts(sorted);
	};

	// 추천순으로 정렬하기
	const handleSortByReview = () => {
		const sorted = [...filteredProducts].sort(
			(a, b) => Number(b.discount_rate) - Number(a.discount_rate)
		);
		setFilteredProducts(sorted);
	};

	// 현재 페이지의 아이템을 계산
	const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = filteredProducts.slice(startIndex, endIndex);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	if (!banners) return <></>;
	return (
		<div className={styles.container}>
			<Wrapper>
				<div className={styles.searchsection}>
					{/* <SearchInput onSearch={handleConfirmSearch} /> */}

					<span className={styles.totalCount}>총{filteredProducts.length}건</span>
					<div className={styles.buttonBar}>
						<SortButton onClick={handleSortByReview}>추천순 </SortButton>
						<HighPriceSortButton onClick={handleSortHighToLow}>| 높은가격순 |</HighPriceSortButton>
						<LowPriceSortButton onClick={handleSortLowToHigh}>낮은가격순</LowPriceSortButton>
					</div>
					<div className={styles.productList}>
						{searchQuery ? (
							<h2 className={`${styles.resultText} ${styles.searchQueryText}`}>
								<span>'{searchQuery}'에 대한 입력결과</span>
							</h2>
						) : null}
						{filteredProducts.length === 0 && searchQuery ? (
							<p>검색결과가 없습니다.</p>
						) : (
							<>{<ProductList products={currentItems} />}</>
						)}
					</div>
				</div>
				<div className={styles.paginationCenter}>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
						buttonClassName={styles.paginationButton}
						activeButtonClassName={styles.active}
					/>
				</div>
			</Wrapper>
		</div>
	);
};

export default SearchPage;
