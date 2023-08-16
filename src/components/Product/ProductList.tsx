import clsx from 'clsx';
import * as uuid from 'uuid';

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
	autoPlay?: boolean;
};

const ProductList = ({ title, subTitle, products, autoPlay }: Props) => {
	const section = uuid.v4();

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
					autoplay={autoPlay && { delay: 2500, disableOnInteraction: false }}
					navigation={{
						nextEl: '.swiperBtnNext' + section,
						prevEl: '.swiperBtnPrev' + section,
					}}
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
				<button className={clsx('swiperBtnNext' + section, styles.swiperNext)}></button>
				<button className={clsx('swiperBtnPrev' + section, styles.swiperPrev)}></button>
			</div>

			<a className={styles.showMoreButton}>
				<button>상품 전체 보기</button>
			</a>
		</div>
	);
};

export default ProductList;
