export const convertNumberFormat = (num: number) => {
	return new Intl.NumberFormat('ko').format(num);
};
