import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const ProductSelectorGroup = () => {
	const [isAllChecked, setIsAllChecked] = useState(false);

	const handleCheckbox = () => {
		setIsAllChecked(prevIsAllChecked => !prevIsAllChecked);
	};

	return (
		<div>
			<Checkbox isChecked={isAllChecked} onChnage={handleCheckbox}>
				전체선택
			</Checkbox>
			<button type='button'>선택삭제</button>
		</div>
	);
};

export default ProductSelectorGroup;
