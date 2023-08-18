import { useEffect, useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Wrapper from '@components/Wrapper/Wrapper';
import Logo from '@components/Logo/Logo';
import SearchInput from '@components/SearchInput/SearchInput';
import HeaderIcon from '@components/Header/HeaderIcon';
import HeaderCategories from '@components/Header/HeaderCategories';

import { mainRoutes, themeRoutes, userRoutes } from './header-routes';
import styles from './Header.module.css';
import { CartItemContext } from '@/context/CartItemsContext';

const Header = () => {
	const navigate = useNavigate();
	const [isScrolledDown, setIsScrolledDown] = useState(false);
	const [cartItemLength, setCartItemLength] = useState(0);
	const { value } = useContext(CartItemContext);

	useEffect(() => {
		const handleHeaderStyle = () => {
			if (scrollY > 110 && isScrolledDown) return;
			if (scrollY > 110) {
				setIsScrolledDown(true);
			} else {
				setIsScrolledDown(false);
			}
		};

		handleHeaderStyle();
		window.addEventListener('scroll', handleHeaderStyle);

		return () => window.removeEventListener('scroll', handleHeaderStyle);
	}, [isScrolledDown]);

	useEffect(() => {
		setCartItemLength(value);
	}, [value]);

	const handleFavoriteBtn = () => {
		navigate('/mypage/pick/list');
	};

	return (
		<header className={`${styles.header} ${isScrolledDown ? styles.active : ''}`}>
			<Wrapper>
				<section className={styles.header_top}>
					<div className={styles.markets}>
						<Logo />
						<ul>
							{mainRoutes.map(mainRoute => (
								<li key={mainRoute.name} className={styles[mainRoute.badge.toLowerCase()]}>
									<NavLink
										to={mainRoute.link}
										className={({ isActive }) => (isActive ? styles.active : '')}
									>
										{mainRoute.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<SearchInput isScrolled={isScrolledDown} />
					<div className={styles.user_info}>
						<ul>
							<li className={styles.btn_address}>
								<HeaderIcon name='배송지등록' className={styles.ico_address} />
								<div role='tooltip' className={styles.tooltip}>
									<p>
										<strong>배송지를 등록</strong>하고
										<br />
										<span>구매 가능한 상품을 확인하세요!</span>
									</p>
									<div className={styles.btn_tooltip}>
										<button type='button'>로그인</button>
										<button type='button'>
											<img
												src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAQAAAAiAqDbAAAAAXNSR0IArs4c6QAAAYdJREFUeNrt1j9Lw0AYBvDGqlBF7VAQRUFBoeDmIoL4b9Cp4CJO1g9QrHQVCnbo7mdwLNJvUJy6KSIFxaloQQpSaxqT3D1FHodWrTYZctUtT7Yc97sX7u5NAgE/fvw4h5o+J2IiYceNtecRaj2DuaC9DxP8fkShPtMTWQ7jthP8go+U662NQgdBlMxFDlKj1oiIZIu1s0osNZRAUKR+TjcncAOCYksBNXdAUB53j1RCMEDUL/q911kFcX/S5zRqrIKg2PaIvo2DoLHptqR8AGXeI2otgeDLmNu4nQFhetwsEQNBDriiByDoETXWQfBpyHXRlAKqz4OgseCKFkBce76eaILyzLmWRgQERcLzObWzIGgtO+59EUSzEvKMVofRBKHXprvINAiKQ6W731hpt49kLvgJmpO4ar+NKbaU1sEC8S7P7Yw4xV1nrzI2FNnXWVz+anymHZfRVo9VZqnJqEzLIuryUeatvdaFqE31yLp02zYro//AitQffxLLYWuXg/6vgR8/HfkA7NFWMofTE4wAAAAASUVORK5CYII='
												alt=''
											/>
											주소 검색
										</button>
									</div>
								</div>
							</li>
							<li className={styles.btn_favorite}>
								<button type='button' onClick={handleFavoriteBtn}>
									<HeaderIcon name='찜목록' className={styles.ico_hearts} />
								</button>
							</li>
							<li className={styles.btn_cart}>
								<Link to='/cart'>
									<span className={styles.badge}>{cartItemLength}</span>
									<HeaderIcon name='장바구니목록' className={styles.ico_cart} />
								</Link>
							</li>
						</ul>
					</div>
				</section>
				<section className={styles.header_bottom}>
					<HeaderCategories isScrolled={isScrolledDown} />
					<ul className={styles.route_themes}>
						{themeRoutes.map(themeRoute => (
							<li key={themeRoute.name}>
								<Link to={themeRoute.link}>{themeRoute.name}</Link>
							</li>
						))}
					</ul>
					<strong className={styles.route_notice_delivery}>
						<Link to='/'>
							<span className={styles.purple}>샛별 · 택배</span> 배송안내
						</Link>
					</strong>
				</section>
				<section className={styles.header_aside}>
					<ul>
						{userRoutes.map(userRoute => (
							<li key={userRoute.name}>
								<Link to={userRoute.link}>{userRoute.name}</Link>
								{userRoute.subRoutes && (
									<ul className={styles.header_aside_sub}>
										{userRoute.subRoutes.map(userSubRoute => (
											<li key={userSubRoute.name}>
												<Link to={userSubRoute.link}>{userSubRoute.name}</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</section>
			</Wrapper>
		</header>
	);
};

export default Header;
