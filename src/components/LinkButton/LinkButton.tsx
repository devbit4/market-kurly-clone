import { Link } from 'react-router-dom';

import styles from './LinkButton.module.css';

interface LinkButton {
	type: 'PRIMARY';
	url: string;
	children: React.ReactNode;
}

const LinkButton = ({ type, url, children }: LinkButton) => {
	const isGlobalLink = url.includes('http');

	return (
		<div className={`${styles.button} ${styles[type.toLowerCase()]}`}>
			{isGlobalLink ? <a href={url}>{children}</a> : <Link to={url}>{children}</Link>}
		</div>
	);
};

export default LinkButton;
