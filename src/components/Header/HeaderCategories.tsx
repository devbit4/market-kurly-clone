import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderCategories.module.css';
import { categoryRoutes } from './header-routes';

const HeaderCategories = () => {
	const [isSubCategoryActive, setIsSubCategoryActive] = useState(false);
	const getClassName = (defaultStyle: string) => {
		return isSubCategoryActive ? `${defaultStyle} ${styles.active}` : defaultStyle;
	};

	return (
		<div className={styles.route}>
			<div className={getClassName(styles.route_name)}>카테고리</div>
			<ul
				className={styles.route_main}
				onMouseEnter={() => setIsSubCategoryActive(true)}
				onMouseLeave={() => setIsSubCategoryActive(false)}
			>
				{categoryRoutes.map(categoryRoute => (
					<li key={categoryRoute.main_category.name}>
						<span className={styles.route_main_label}>
							<Link to={categoryRoute.main_category.link}>{categoryRoute.main_category.name}</Link>
						</span>
						{categoryRoute.sub_category.length > 0 && (
							<ul
								className={getClassName(
									categoryRoute.has_image ? styles.route_recommended : styles.route_sub
								)}
							>
								{categoryRoute.sub_category.map((subCategoryRoute, index) => (
									<li key={index}>
										<Link to={subCategoryRoute.link}>
											{'image' in subCategoryRoute && <img src={subCategoryRoute.image} alt='' />}
											<span>{subCategoryRoute.name}</span>
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default HeaderCategories;
