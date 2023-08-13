interface FooterContact {
	title: string;
	description: string;
	className: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FooterContact = ({ className, title, description, onClick }: FooterContact) => {
	const descriptions = description.split(',');

	return (
		<div className={className}>
			<button type='button' onClick={onClick}>
				{title}
			</button>
			<div>
				{descriptions.map((desc, index) => (
					<div key={index}>
						<span>{desc}</span>
						{descriptions.length - 1 === index && <br />}
					</div>
				))}
			</div>
		</div>
	);
};

export default FooterContact;
