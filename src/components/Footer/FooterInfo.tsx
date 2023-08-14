interface FooterInfo {
	className: string;
	imageSrc: string;
	children: React.ReactNode;
}

const FooterInfo = ({ className, imageSrc, children }: FooterInfo) => {
	return (
		<div className={className}>
			<img src={imageSrc} alt='' />
			<p>{children}</p>
		</div>
	);
};

export default FooterInfo;
