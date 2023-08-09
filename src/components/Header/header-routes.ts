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
		name: '채소',
		subCategories: [
			'친환경',
			'고구마·감자·당근',
			'시금치·쌈채소·나물',
			'브로콜리·파프리카·양배추',
			'양파·대파·마늘·배추',
			'오이·호박·고추',
			'냉동·이색·간편채소',
			'콩나물·버섯',
		],
	},
	{
		name: '과일·견과·쌀',
		subCategories: [
			'친환경',
			'제철과일',
			'국산과일',
			'수입과일',
			'간편과일',
			'냉동·견과일',
			'견과류',
			'쌀·잡곡',
		],
	},
	{
		name: '수산·해산·건어물',
		subCategories: [
			'제철수산',
			'생선류',
			'굴비·반건류',
			'오징어·낙지·문어',
			'새우·게·랍스터',
			'해산물·조개류',
			'수산가공품',
			'김·미역·해조류',
			'건어물·다시팩',
		],
	},
	{
		name: '정육·계란',
		subCategories: [],
	},
	{
		name: '국·반찬·메인요리',
		subCategories: [],
	},
	{
		name: '샐러드·간편식',
		subCategories: [],
	},
	{
		name: '면·양념·오일',
		subCategories: [],
	},
	{
		name: '생수·음료·우유·커피',
		subCategories: [],
	},
	{
		name: '간식·과자·떡',
		subCategories: [],
	},
	{
		name: '베이커리·치즈·델리',
		subCategories: [],
	},
	{
		name: '건강식품',
		subCategories: [],
	},
	{
		name: '와인·위스키',
		subCategories: [],
	},
	{
		name: '전통주',
		subCategories: [],
	},
	{
		name: '생활용품·리빙·캠핑',
		subCategories: [],
	},
	{
		name: '스킨케어·메이크업',
		subCategories: [],
	},
	{
		name: '헤어·바디·구강',
		subCategories: [],
	},
	{
		name: '주방용품',
		subCategories: [],
	},
	{
		name: '가전제품',
		subCategories: [],
	},
	{
		name: '반려동물',
		subCategories: [],
	},
	{
		name: '베이비·키즈·완구',
		subCategories: [],
	},
	{
		name: '컬리의 추천',
		subCategories: [],
		subCategoriesImages: [
			gnbRecommendImage1,
			gnbRecommendImage2,
			gnbRecommendImage3,
			gnbRecommendImage4,
			gnbRecommendImage5,
			gnbRecommendImage6,
			gnbRecommendImage7,
			gnbRecommendImage8,
			gnbRecommendImage9,
			gnbRecommendImage10,
			gnbRecommendImage11,
			gnbRecommendImage12,
			gnbRecommendImage13,
			gnbRecommendImage14,
			gnbRecommendImage15,
			gnbRecommendImage16,
		],
	},
];

export const themeRoutes = [
	{ name: '신상품', link: '/' },
	{ name: '베스트', link: '/' },
	{ name: '알뜰쇼핑', link: '/' },
	{ name: '특가/혜택', link: '/' },
];
