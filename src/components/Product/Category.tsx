import styles from './Product.module.css';

type Props = {
	selectedCategory: number;
	setSelectedCategory: (category: number) => void;
};

const Category = ({ selectedCategory, setSelectedCategory }: Props) => {
	const handleCategoryChange = (category: number) => {
		setSelectedCategory(category);
	};

	return (
		<>
			<div className={styles.title}>
				<a>
					<span>오늘의 카테고리 랭킹</span>
				</a>
				<p>최근 2주간 후기를 가장 많이 남겨주셨어요</p>
			</div>

			<ul className={styles.category}>
				<li className={selectedCategory === 100 ? styles.activeCategory : undefined}>
					<button onClick={() => handleCategoryChange(100)}>카테고리1</button>
				</li>
				<li className={selectedCategory === 101 ? styles.activeCategory : undefined}>
					<button onClick={() => handleCategoryChange(101)}>카테고리2</button>
				</li>
				<li className={selectedCategory === 102 ? styles.activeCategory : undefined}>
					<button onClick={() => handleCategoryChange(102)}>카테고리3</button>
				</li>
				<li className={selectedCategory === 103 ? styles.activeCategory : undefined}>
					<button onClick={() => handleCategoryChange(103)}>카테고리4</button>
				</li>
			</ul>
		</>
	);
};

export default Category;
