import styles from './ProductPrice.module.css';

const ProductPrice = () => {
	return (
		<div className={styles.price_wrap}>
			<dl className={styles.price_info}>
				<div>
					<dt>상품 금액</dt>
					<dd>0원</dd>
				</div>
				<div>
					<dt>상품할인금액</dt>
					<dd>0원</dd>
				</div>
				<div>
					<dt>베송비</dt>
					<dd>0원</dd>
				</div>
			</dl>
			<dl className={styles.price_total}>
				<dt>결제예정금액</dt>
				<dd>
					<span>0</span>원
				</dd>
			</dl>
			<div className={styles.notice}>
				<span className={styles.badge}>적립</span>
				<strong>로그인 후 회원 등급에 따라 적립</strong>
			</div>
		</div>
	);
};

export default ProductPrice;
