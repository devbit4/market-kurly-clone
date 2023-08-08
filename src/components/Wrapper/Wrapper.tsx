import styles from './Wrapper.module.css';

interface Wrapper {
	children: React.ReactNode;
}

const Wrapper = ({ children }: Wrapper) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
