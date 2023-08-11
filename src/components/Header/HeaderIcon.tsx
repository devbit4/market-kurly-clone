interface HeaderIcon {
	name: string;
	className: string;
}

const HeaderIcon = ({ name, className }: HeaderIcon) => {
	return (
		<div className={className}>
			<span className='sr_only'>{name}</span>
		</div>
	);
};

export default HeaderIcon;
