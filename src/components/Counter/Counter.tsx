interface Counter {
	className?: string;
	quantity: number;
	increateQuantity: () => void;
	decreaseQuantity: () => void;
}

import styles from './Counter.module.css';

const Counter = ({ className, quantity, increateQuantity, decreaseQuantity }: Counter) => {
	return (
		<div className={`${styles.counter} ${className ?? ''}`}>
			<button type='button' onClick={decreaseQuantity} className={styles.btn_minus}>
				<span className='sr_only'>수량 내리기</span>
			</button>
			<div className={styles.quntity}>{quantity ?? 0}</div>
			<button type='button' onClick={increateQuantity} className={styles.btn_plus}>
				<span className='sr_only'>수량 더하기</span>
			</button>
		</div>
	);
};

export default Counter;
