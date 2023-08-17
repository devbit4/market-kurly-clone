import { useEffect, useState } from 'react';
import moment from 'moment';
import { clsx } from 'clsx';

import styles from './Product.module.css';

import { Product } from '@/pages/MainPage';

import ProductItem from './ProductItem';

type Props = {
	promotions: Product[];
};

const Promotion = ({ promotions }: Props) => {
	const targetTime = moment().add(1, 'days').set({ hour: 11, minute: 0, second: 0 });

	const [currrentTiem, setCurrentTime] = useState(moment());

	const hour = String(moment.duration(targetTime.diff(currrentTiem)).hours()).padStart(2, '0');
	const minute = String(moment.duration(targetTime.diff(currrentTiem)).minutes()).padStart(2, '0');
	const second = String(moment.duration(targetTime.diff(currrentTiem)).seconds()).padStart(2, '0');

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(moment());
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<div className={styles.container}>
				<div className={clsx(styles.inner, styles.promotionInner)}>
					<li className={`${styles.product} ${styles.promotion}`}>
						<h2>매일 오전 11시 OPEN!</h2>
						<h3>24시간 한정 일일특가</h3>

						<div className={styles.pomotionTime}>
							<div className={styles.lottieTimer}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 36 36'
									width='36'
									height='36'
									preserveAspectRatio='xMidYMid meet'
									// style={{
									// 	width: '100%',
									// 	height: '100%',
									// 	transform: 'translate3d(0px, 0px, 0px)',
									// }}
								>
									<defs>
										<clipPath id='__lottie_element_2'>
											<rect width='36' height='36' x='0' y='0'></rect>
										</clipPath>
									</defs>
									<g clipPath='url(#__lottie_element_2)'>
										<g
											transform='matrix(1,0,0,1,3.75,3.75)'
											opacity='1'
											// style={{ display: 'block' }}
										>
											<g opacity='1' transform='matrix(1,0,0,1,14.25,14.25)'>
												<path
													fill='rgb(189,118,255)'
													fillOpacity='1'
													d=' M14,0 C14,7.73199987411499 7.73199987411499,14 0,14 C-7.73199987411499,14 -14,7.73199987411499 -14,0 C-14,-7.73199987411499 -7.73199987411499,-14 0,-14 C7.73199987411499,-14 14,-7.73199987411499 14,0z'
												></path>
											</g>
											<g opacity='1' transform='matrix(1,0,0,1,0,0)'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													fillOpacity='0'
													stroke='rgb(255,255,255)'
													strokeOpacity='1'
													strokeWidth='2'
													d=' M14.25,8.293999671936035 C14.25,8.293999671936035 14.25,14.293999671936035 14.25,14.293999671936035'
												></path>
											</g>
											<g
												opacity='1'
												transform='matrix(-0.5058007836341858,-0.8626503348350525,0.8626503348350525,-0.5058007836341858,9.063004493713379,33.8200569152832)'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													fillOpacity='0'
													stroke='rgb(255,255,255)'
													strokeOpacity='1'
													strokeWidth='2'
													d=' M20.25,14.293999671936035 C20.25,14.293999671936035 14.25,14.293999671936035 14.25,14.293999671936035'
												></path>
											</g>
										</g>
									</g>
								</svg>
							</div>
							<div className={styles.timeUnits}>
								<span>{`${hour}:${minute}:${second}`}</span>
							</div>
						</div>
						<p>망설이면 늦어요!</p>
					</li>
					{promotions.map(promotion => {
						return <ProductItem key={promotion.no} product={promotion} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Promotion;
