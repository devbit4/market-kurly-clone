import styles from './Product.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import { ProductType } from '@/pages/MainPage';

import ProductItem from './ProductItem';

type Props = {
	products: ProductType[];
	title?: string;
	subTitle?: string;
};

const ProductList = ({ title, subTitle, products }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				{title && (
					<a>
						<span>이 상품 어때요?</span>
					</a>
				)}
				{subTitle && <p>최근 2주간 후기를 가장 많이 남겨주셨어요</p>}
			</div>

			<div className={styles.inner}>
				<Swiper
					slidesPerView={4}
					modules={[Autoplay, Navigation]}
					navigation={true}
					className='mySwiper'
				>
					{products?.map(product => {
						return (
							<SwiperSlide key={product.no}>
								<ProductItem product={product}></ProductItem>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>

			<a style={{ display: 'flex', justifyContent: 'center' }}>
				<button
					style={{
						width: '516px',
						height: '56px',
						border: '1px solid rgb(227, 227, 227)',
						marginTop: '30px',
						backgroundColor: 'transparent',
					}}
				>
					상품 전체 보기
				</button>
			</a>
		</div>
	);
};

export default ProductList;
