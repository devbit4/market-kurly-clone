import Checkbox from '@components/Checkbox/Checkbox';

import styles from './ProductSelectorGroup.module.css';

interface ProductSelectorGroup {
	isAllChecked: boolean;
	handleCheckbox: () => void;
}

const ProductSelectorGroup = ({ isAllChecked, handleCheckbox }: ProductSelectorGroup) => {
	return (
		<div className={styles.selector_group}>
			<Checkbox isChecked={isAllChecked} onChnage={handleCheckbox}>
				전체선택
			</Checkbox>
			<button type='button' className={styles.btn_delete}>
				선택삭제
			</button>
		</div>
	);
};

export default ProductSelectorGroup;
