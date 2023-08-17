import ProductGroup from '@/components/Cart/ProductGroup';
import ProductPrice from '@/components/Cart/ProductPrice';
import ProductSelectorGroup from '@/components/Cart/ProductSelectorGroup';
import LinkButton from '@/components/LinkButton/LinkButton';
import Wrapper from '@/components/Wrapper/Wrapper';

const CartPage = () => {
	return (
		<Wrapper>
			<h2>장바구니</h2>
			<div>
				<ProductSelectorGroup />
				<ProductGroup category='냉장 식품' products={[]} />
				<ProductGroup category='상온 식품' products={[]} />
			</div>
			<div>
				<ProductPrice />
				<LinkButton type='PRIMARY' url='/login'>
					로그인
				</LinkButton>
				<ul>
					<li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
					<li>[마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
				</ul>
			</div>
		</Wrapper>
	);
};

export default CartPage;
