import styles from './Product.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ProductType } from '@/pages/MainPage';

import ProductItem from './ProductItem';

type Props = {
	promotions: ProductType[];
};

const Promotion = ({ promotions }: Props) => {
	return (
		<>
			<div className={styles.container}>
				<Swiper
					slidesPerView={4}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Navigation, Pagination]}
					navigation={true}
					className='mySwiper'
				>
					<SwiperSlide>
						<li className={`${styles.product} ${styles.promotion}`}>
							<h2>매일 오전 11시 OPEN!</h2>
							<h3>24시간 한정 일일특가</h3>
							<div className={styles.pomotionTime}>
								<div className={styles.lottieTimer}></div>
								<div className={styles.timeUnits}>
									<span>22:39:24</span>
								</div>
							</div>
							<p>망설이면 늦어요!</p>
						</li>
					</SwiperSlide>

					{promotions.map(promotion => {
						return (
							<SwiperSlide key={promotion.no}>
								<ProductItem product={promotion} />;
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};

export default Promotion;
