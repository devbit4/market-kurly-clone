import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Counter from '../Counter/Counter';
import styles from './ProductGroup.module.css';

interface ProductGroup {
	category: string;
	products: any;
}

const ProductGroup = ({ category, products }: ProductGroup) => {
	const [isDropdownExpanded, setIsDropDownExpanded] = useState(true);
	const icon = category.includes('냉장') ? styles.ic_water : styles.ic_sun;

	return (
		<div className={styles.product_group}>
			<h3 className={styles.product_category}>
				<span className={icon}>{category}</span>
				<button
					type='button'
					className={styles.btn_dropdown}
					onClick={() => setIsDropDownExpanded(prev => !prev)}
				>
					<span className='sr_only'>상품 리스트 {isDropdownExpanded ? '닫기' : '열기'}</span>
				</button>
			</h3>
			<div>
				{products.length > 0 &&
					products.map(product => (
						<div key={product.name}>
							<Checkbox isChecked={true} onChnage={() => {}} />
							<img src='' alt='' />
							<h4>{product.name}</h4>
							<Counter
								className=''
								quantity={0}
								increateQuantity={() => {}}
								decreaseQuantity={() => {}}
							/>
							<strong>{product.price}</strong>
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
