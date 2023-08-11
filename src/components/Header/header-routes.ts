import gnbRecommendImage1 from '@assets/images/img_gnb_recommend1.png';
import gnbRecommendImage2 from '@assets/images/img_gnb_recommend2.jpg';
import gnbRecommendImage3 from '@assets/images/img_gnb_recommend3.jpg';
import gnbRecommendImage4 from '@assets/images/img_gnb_recommend4.png';
import gnbRecommendImage5 from '@assets/images/img_gnb_recommend5.png';
import gnbRecommendImage6 from '@assets/images/img_gnb_recommend6.jpg';
import gnbRecommendImage7 from '@assets/images/img_gnb_recommend7.png';
import gnbRecommendImage8 from '@assets/images/img_gnb_recommend8.png';
import gnbRecommendImage9 from '@assets/images/img_gnb_recommend9.jpg';
import gnbRecommendImage10 from '@assets/images/img_gnb_recommend10.png';
import gnbRecommendImage11 from '@assets/images/img_gnb_recommend11.png';
import gnbRecommendImage12 from '@assets/images/img_gnb_recommend12.png';
import gnbRecommendImage13 from '@assets/images/img_gnb_recommend13.png';
import gnbRecommendImage14 from '@assets/images/img_gnb_recommend14.png';
import gnbRecommendImage15 from '@assets/images/img_gnb_recommend15.png';
import gnbRecommendImage16 from '@assets/images/img_gnb_recommend16.png';

export const mainRoutes = [
	{ name: '마켓컬리', link: '/', badge: 'NONE' },
	{ name: '뷰티컬리', link: '/', badge: 'NEW' },
];

export const userRoutes = [
	{ name: '회원가입', link: '/' },
	{ name: '마켓컬리', link: '/' },
	{
		name: '고객센터',
		link: '/',
		subRoutes: [
			{ name: '공지사항', link: '/' },
			{ name: '자주하는 질문', link: '/' },
			{ name: '1:1 문의', link: '/' },
			{ name: '대량 주문 문의', link: '/' },
		],
	},
];

export const categoryRoutes = [
	{
		main_category: {
			name: '채소',
			link: '/',
		},
		sub_category: [
			{ name: '친환경', link: '/' },
			{ name: '고구마·감자·당근', link: '/' },
			{ name: '시금치·쌈채소·나물', link: '/' },
			{ name: '브로콜리·파프리카·양배추', link: '/' },
			{ name: '양파·대파·마늘·배추', link: '/' },
			{ name: '오이·호박·고추', link: '/' },
			{ name: '냉동·이색·간편채소', link: '/' },
			{ name: '콩나물·버섯', link: '/' },
		],
	},
	{
		main_category: {
			name: '과일·견과·쌀',
			link: '/',
		},
		sub_category: [
			{ name: '친환경', link: '/' },
			{ name: '제철과일', link: '/' },
			{ name: '국산과일', link: '/' },
			{ name: '수입과일', link: '/' },
			{ name: '간편과일', link: '/' },
			{ name: '냉동·견과일', link: '/' },
			{ name: '견과류', link: '/' },
			{ name: '쌀·잡곡', link: '/' },
		],
	},
	{
		main_category: {
			name: '수산·해산·건어물',
			link: '/',
		},
		sub_category: [
			{ name: '제철수산', link: '/' },
			{ name: '생선류', link: '/' },
			{ name: '굴비·반건류', link: '/' },
			{ name: '오징어·낙지·문어', link: '/' },
			{ name: '새우·게·랍스터', link: '/' },
			{ name: '해산물·조개류', link: '/' },
			{ name: '수산가공품', link: '/' },
			{ name: '김·미역·해조류', link: '/' },
			{ name: '건어물·다시팩', link: '/' },
		],
	},
	{
		main_category: {
			name: '정육·계란',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '국·반찬·메인요리',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '샐러드·간편식',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '면·양념·오일',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '생수·음료·우유·커피',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '간식·과자·떡',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '베이커리·치즈·델리',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '건강식품',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '와인·위스키',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '전통주',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '생활용품·리빙·캠핑',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '스킨케어·메이크업',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '헤어·바디·구강',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '주방용품',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '가전제품',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '반려동물',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '베이비·키즈·완구',
			link: '/',
		},
		sub_category: [],
	},
	{
		main_category: {
			name: '컬리의 추천',
			link: '/',
		},
		sub_category: [
			{ name: '제철수산', link: '/', image: gnbRecommendImage1 },
			{ name: '생선류', link: '/', image: gnbRecommendImage2 },
			{ name: '굴비·반건류', link: '/', image: gnbRecommendImage3 },
			{ name: '오징어·낙지·문어', link: '/', image: gnbRecommendImage4 },
			{ name: '새우·게·랍스터', link: '/', image: gnbRecommendImage5 },
			{ name: '해산물·조개류', link: '/', image: gnbRecommendImage6 },
			{ name: '수산가공품', link: '/', image: gnbRecommendImage7 },
			{ name: '김·미역·해조류', link: '/', image: gnbRecommendImage8 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage9 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage10 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage11 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage12 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage13 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage14 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage15 },
			{ name: '건어물·다시팩', link: '/', image: gnbRecommendImage16 },
		],
	},
];

export const themeRoutes = [
	{ name: '신상품', link: '/' },
	{ name: '베스트', link: '/' },
	{ name: '알뜰쇼핑', link: '/' },
	{ name: '특가/혜택', link: '/' },
];
