import * as React from 'react';
import { clsx } from 'clsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './MainSwiper.module.css';

const MainSwiper: React.FC = () => {
	return (
		<div className={styles.mainSwiperContainer}>
			<Swiper
				loop={true}
				loopAdditionalSlides={1}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				modules={[Autoplay, Navigation, Pagination]}
				navigation={{
					nextEl: '.swiperBtnNext',
					prevEl: '.swiperBtnPrev',
				}}
				pagination={{
					type: 'fraction',
				}}
				className='mySwiper'
			>
				<SwiperSlide>
					<div className='img'>
						<img
							src='https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/e688e39f-8a6d-442d-848b-731bb20e988f.jpg'
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='img'>
						<img
							src='https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/3c6275ae-5e8a-457a-92cf-2f54c7d463a6.jpg'
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='img'>
						<img
							src='https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/2f145724-c22f-4e28-ae91-d9f8d864f34d.jpg'
							alt=''
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='img'>
						<img
							src='https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/ca7f572e-2733-4c69-ae48-9c8f975e778b.jpg'
							alt=''
						/>
					</div>
				</SwiperSlide>
			</Swiper>
			<button className={clsx('swiperBtnNext', styles.swiperNext)}></button>
			<button className={clsx('swiperBtnPrev', styles.swiperPrev)}></button>
		</div>
	);
};

export default MainSwiper;
