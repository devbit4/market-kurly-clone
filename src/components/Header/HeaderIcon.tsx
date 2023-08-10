interface HeaderIcon {
	name: string;
	className: string;
	onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
}

const HeaderIcon = ({ name, className, onMouseEnter }: HeaderIcon) => {
	return (
		<div className={className} onMouseEnter={onMouseEnter}>
			<span className='sr_only'>{name}</span>
		</div>
	);
};

export default HeaderIcon;
