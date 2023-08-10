import { ProductType } from '@/pages/MainPage';
import styles from './Product.module.css';

type Props = {
	product: ProductType;
};

const ProductItem = ({ product }: Props) => {
	return (
		<li className={styles.product}>
			<div className={styles.productImg}>
				<img src={product.list_image_url}></img>
				<div className={styles.cartSticker}>
					<button>
						<img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='></img>
					</button>
				</div>
			</div>
			<div className={styles.productInfo}>
				<h3 className={styles.productName}>{product.name}</h3>
				<div className={styles.productContent}>
					<div className={styles.productPrice}>
						<div>
							<span className={styles.discountRate}>{product.discount_rate}%</span>
							<span className={styles.salesPrice}>{product.discounted_price}원</span>
						</div>
						<div>
							<span className={styles.dimmedPrice}>{product.sales_price}원</span>
						</div>
					</div>
				</div>
				<div className={styles.reviewCount}>
					<div className={styles.reviewIcon}></div>
					후기
					<span className={styles.reviewNumber}>{product.review_count}</span>
				</div>
			</div>
		</li>
	);
};

export default ProductItem;
