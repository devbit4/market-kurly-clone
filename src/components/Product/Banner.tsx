import { BannerType } from '@/pages/MainPage';
import styles from './Product.module.css';

type Props = {
	banner: BannerType;
};

const Banner = ({ banner }: Props) => {
	return (
		<div className={styles.banner}>
			<img src={banner.image_url}></img>
		</div>
	);
};

export default Banner;
