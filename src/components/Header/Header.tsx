import { Link } from 'react-router-dom';

import Logo from '@components/Logo/Logo';
import SearchInput from '@components/SearchInput/SearchInput';
import HeaderIcon from '@components/Header/HeaderIcon';
import HeaderCategories from '@components/Header/HeaderCategories';

import { mainRoutes, themeRoutes, userRoutes } from './header-routes';
import styles from './Header.module.css';

const Header = () => {
	const handleAddressBtn = () => {};

	return (
		<header className={styles.header}>
			<section className={styles.header_top}>
				<div>
					<Logo />
					<ul>
						{mainRoutes.map(mainRoute => (
							<li key={mainRoute.name} className={`styles.badge_${mainRoute.badge}`}>
								<Link to={mainRoute.link}>{mainRoute.name}</Link>
							</li>
						))}
					</ul>
				</div>
				<SearchInput />
				<div>
					<ul>
						<li>
							<HeaderIcon
								name='배송지등록'
								className={styles.ico_address}
								onMouseEnter={handleAddressBtn}
							/>
						</li>
						<li>
							<HeaderIcon name='찜목록' className={styles.ico_hearts} />
						</li>
						<li>
							<HeaderIcon name='장바구니목록' className={styles.ico_cart} />
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.header_bottom}>
				<HeaderCategories />
				<ul>
					{themeRoutes.map(themeRoute => (
						<li key={themeRoute.name}>
							<Link to={themeRoute.link}>{themeRoute.name}</Link>
						</li>
					))}
				</ul>
				<strong>
					<Link to='/'>
						<span className={styles.purple}>샛별·택배</span> 배송안내
					</Link>
				</strong>
			</section>
			<section className={styles.header_aside}>
				<ul>
					{userRoutes.map(userRoute => (
						<li key={userRoute.name}>
							<Link to={userRoute.link}>{userRoute.name}</Link>
							{userRoute.subRoutes && (
								<ul>
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
		</header>
	);
};

export default Header;
