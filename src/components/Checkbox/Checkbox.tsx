import styles from './Checkbox.module.css';

interface Checkbox {
	isChecked: boolean;
	onChnage: () => void;
	children?: React.ReactNode;
}

const Checkbox = ({ children, isChecked, onChnage }: Checkbox) => {
	return (
		<label className={styles.checkbox}>
			<input type='checkbox' className='sr_only' onChange={onChnage} />
			<div className={styles.icon}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
						stroke={isChecked ? '' : '#ddd'}
						fill={isChecked ? '#5f0080' : '#fff'}
					></path>
					<path
						d='M7 12.6667L10.3846 16L18 8.5'
						stroke={isChecked ? '#fff' : '#ddd'}
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>
				</svg>
			</div>
			{children}
		</label>
	);
};

export default Checkbox;
