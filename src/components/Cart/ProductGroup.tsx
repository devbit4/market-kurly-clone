import { useState } from 'react';

import Checkbox from '@components/Checkbox/Checkbox';
import Counter from '@components/Counter/Counter';
import { CartProductInfo } from '@/types/CartProduct';

import styles from './ProductGroup.module.css';
import { convertNumberFormat } from '@/utils/convertNumberFormat';

interface ProductGroup {
	category: string;
	products: CartProductInfo[];
	handleProductCheckState: (id: number) => void;
	increaseProductQuantity: (id: number) => void;
	decreaseProductQuantity: (id: number) => void;
}

const ProductGroup = ({
	category,
	products,
	handleProductCheckState,
	increaseProductQuantity,
	decreaseProductQuantity,
}: ProductGroup) => {
	const [isDropdownExpanded, setIsDropDownExpanded] = useState(true);
	const icon = category.includes('냉장') ? styles.ic_water : styles.ic_sun;

	return (
		<div className={styles.product_group}>
			<h3 className={styles.product_category}>
				<span className={`${styles.category_title} ${icon}`}>{category}</span>
				<button
					type='button'
					className={styles.btn_dropdown}
					onClick={() => setIsDropDownExpanded(prev => !prev)}
				>
					<span className='sr_only'>상품 리스트 {isDropdownExpanded ? '닫기' : '열기'}</span>
				</button>
			</h3>
			<div>
				{products.map(product => (
					<div key={product.name} className={styles.product}>
						<Checkbox
							isChecked={product.isChecked}
							onChnage={() => handleProductCheckState(product.no)}
						/>
						<img src={product.list_image_url} alt='' />
						<h4>{product.name}</h4>
						<Counter
							className=''
							quantity={product.quantity}
							increateQuantity={() => {
								increaseProductQuantity(product.no);
							}}
							decreaseQuantity={() => {
								decreaseProductQuantity(product.no);
							}}
						/>
						{product.discounted_price && product.discounted_price < product.sales_price ? (
							<div className={`${styles.price} ${styles.price_sale}`}>
								<strong>{convertNumberFormat(product.discounted_price)}원</strong>
								<span>{convertNumberFormat(product.sales_price)}원</span>
							</div>
						) : (
							<strong className={styles.price}>{convertNumberFormat(product.sales_price)}원</strong>
						)}
						<button type='button' className={styles.btn_delete}>
							<span className='sr_only'>삭제하기</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductGroup;
