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
		sub_category: [
			{ name: '국내산 소고기', link: '/' },
			{ name: '수입산 소고기', link: '/' },
			{ name: '돼지고기', link: '/' },
			{ name: '계란류', link: '/' },
			{ name: '닭·오리고기', link: '/' },
			{ name: '양념육·돈까스', link: '/' },
			{ name: '양고기', link: '/' },
		],
	},
	{
		main_category: {
			name: '국·반찬·메인요리',
			link: '/',
		},
		sub_category: [
			{ name: '국·탕·찌개', link: '/' },
			{ name: '밀키트·메인요리', link: '/' },
			{ name: '밑반찬', link: '/' },
			{ name: '김치·젓갈·장류', link: '/' },
			{ name: '두부·어묵·부침개', link: '/' },
			{ name: '베이컨·햄·통조림', link: '/' },
		],
	},
	{
		main_category: {
			name: '샐러드·간편식',
			link: '/',
		},
		sub_category: [
			{ name: '샐러드·닭가슴살', link: '/' },
			{ name: '도시락·밥류', link: '/' },
			{ name: '파스타·면류', link: '/' },
			{ name: '떡볶이·튀김·순대', link: '/' },
			{ name: '피자·핫도그·만두', link: '/' },
			{ name: '폭립·떡갈비·안주', link: '/' },
			{ name: '죽·스프·카레', link: '/' },
			{ name: '선식·시리얼', link: '/' },
		],
	},
	{
		main_category: {
			name: '면·양념·오일',
			link: '/',
		},
		sub_category: [
			{ name: '파스타·면류', link: '/' },
			{ name: '식초·소스·드레싱', link: '/' },
			{ name: '양념·액젓·장류', link: '/' },
			{ name: '식용류·참기름·오일', link: '/' },
			{ name: '소금·설탕·향신료', link: '/' },
			{ name: '밀가루·가루·믹스', link: '/' },
		],
	},
	{
		main_category: {
			name: '생수·음료·우유·커피',
			link: '/',
		},
		sub_category: [
			{ name: '생수·탄산수', link: '/' },
			{ name: '음료·주스', link: '/' },
			{ name: '우유·두유·요거트', link: '/' },
			{ name: '커피', link: '/' },
			{ name: '차', link: '/' },
			{ name: '커피용품', link: '/' },
		],
	},
	{
		main_category: {
			name: '간식·과자·떡',
			link: '/',
		},
		sub_category: [
			{ name: '과자·스낵·쿠키', link: '/' },
			{ name: '초콜릿·젤리·캔디', link: '/' },
			{ name: '떡·한과', link: '/' },
			{ name: '아이스크림', link: '/' },
		],
	},
	{
		main_category: {
			name: '베이커리·치즈·델리',
			link: '/',
		},
		sub_category: [
			{ name: '식빵·빵류', link: '/' },
			{ name: '잼·버터·스프레드', link: '/' },
			{ name: '케이크·파이·디저트', link: '/' },
			{ name: '치즈', link: '/' },
			{ name: '델리', link: '/' },
			{ name: '올리브·피클', link: '/' },
		],
	},
	{
		main_category: {
			name: '건강식품',
			link: '/',
		},
		sub_category: [
			{ name: '영양제', link: '/' },
			{ name: '유산균', link: '/' },
			{ name: '홍삼·인삼·꿀', link: '/' },
			{ name: '건강즙·건강음료', link: '/' },
			{ name: '건강분말·건강환', link: '/' },
			{ name: '다이어트·이너뷰티', link: '/' },
			{ name: '유아동', link: '/' },
		],
	},
	{
		main_category: {
			name: '와인·위스키',
			link: '/',
		},
		sub_category: [
			{ name: '레드와인', link: '/' },
			{ name: '화이트와인', link: '/' },
			{ name: '샴페인·스파클링', link: '/' },
			{ name: '위스키', link: '/' },
			{ name: '리큐르', link: '/' },
			{ name: '와인·위스키 용품', link: '/' },
		],
	},
	{
		main_category: {
			name: '전통주',
			link: '/',
		},
		sub_category: [
			{ name: '막걸리·탁주', link: '/' },
			{ name: '증류주·약주·청주', link: '/' },
			{ name: '과실주·리큐르', link: '/' },
			{ name: '전통주 선물세트', link: '/' },
		],
	},
	{
		main_category: {
			name: '생활용품·리빙·캠핑',
			link: '/',
		},
		sub_category: [
			{ name: '휴지·티슈', link: '/' },
			{ name: '여성·위생용품', link: '/' },
			{ name: '세제·청소용품', link: '/' },
			{ name: '화훼·인테리어소품', link: '/' },
			{ name: '의약외품·마스크', link: '/' },
			{ name: '생활잡화·문구', link: '/' },
			{ name: '캠핑용품', link: '/' },
		],
	},
	{
		main_category: {
			name: '스킨케어·메이크업',
			link: '/',
		},
		sub_category: [
			{ name: '스킨·미스트·패드', link: '/' },
			{ name: '에센스·앰플·로션', link: '/' },
			{ name: '크림·오일', link: '/' },
			{ name: '클렌징', link: '/' },
			{ name: '마스크팩', link: '/' },
			{ name: '선케어', link: '/' },
			{ name: '메이크업', link: '/' },
			{ name: '맨즈케어', link: '/' },
			{ name: '뷰티소품·기기', link: '/' },
		],
	},
	{
		main_category: {
			name: '헤어·바디·구강',
			link: '/',
		},
		sub_category: [
			{ name: '구강·면도', link: '/' },
			{ name: '샴푸·컨디셔너', link: '/' },
			{ name: '트리트먼트·팩', link: '/' },
			{ name: '헤어에센스·염모', link: '/' },
			{ name: '바디워시·스크럽', link: '/' },
			{ name: '바디로션·크림', link: '/' },
			{ name: '핸드·립·데오', link: '/' },
			{ name: '향수·디퓨저', link: '/' },
			{ name: '헤어·바디소품', link: '/' },
		],
	},
	{
		main_category: {
			name: '주방용품',
			link: '/',
		},
		sub_category: [
			{ name: '주방소모품·잡화', link: '/' },
			{ name: '주방·조리도구', link: '/' },
			{ name: '냄비·팬·솥', link: '/' },
			{ name: '보관용기·텀블러', link: '/' },
			{ name: '식기·테이블웨어', link: '/' },
			{ name: '컵·잔·커피도구', link: '/' },
		],
	},
	{
		main_category: {
			name: '가전제품',
			link: '/',
		},
		sub_category: [
			{ name: '가전제품', link: '/' },
			{ name: '생활가전', link: '/' },
			{ name: '계절가전', link: '/' },
			{ name: '디지털·PC', link: '/' },
			{ name: '대형·설치가전', link: '/' },
		],
	},
	{
		main_category: {
			name: '반려동물',
			link: '/',
		},
		sub_category: [
			{ name: '강아지 간식', link: '/' },
			{ name: '고양이 간식', link: '/' },
			{ name: '고양이 주식', link: '/' },
			{ name: '건강관리', link: '/' },
			{ name: '배변위생', link: '/' },
			{ name: '장난감', link: '/' },
			{ name: '미용·외출·하우스', link: '/' },
		],
	},
	{
		main_category: {
			name: '베이비·키즈·완구',
			link: '/',
		},
		sub_category: [
			{ name: '분유·간편 이유식', link: '/' },
			{ name: '이유식 재료', link: '/' },
			{ name: '간식·음식', link: '/' },
			{ name: '건강식품', link: '/' },
			{ name: '이유·수유용품', link: '/' },
			{ name: '기저귀·물티슈', link: '/' },
			{ name: '세제·위생용품', link: '/' },
			{ name: '스킨·구강케어', link: '/' },
			{ name: '완구·잡화류', link: '/' },
		],
	},
	{
		main_category: {
			name: '컬리의 추천',
			link: '/',
		},
		sub_category: [
			{ name: '홈캉스', link: '/', image: gnbRecommendImage1 },
			{ name: '식단관리', link: '/', image: gnbRecommendImage2 },
			{ name: '간편한 아침식사', link: '/', image: gnbRecommendImage3 },
			{ name: '재구매 BEST', link: '/', image: gnbRecommendImage4 },
			{ name: '3천원의 행복', link: '/', image: gnbRecommendImage5 },
			{ name: '컬리마트', link: '/', image: gnbRecommendImage6 },
			{ name: '대용량 상품', link: '/', image: gnbRecommendImage7 },
			{ name: '캠핑', link: '/', image: gnbRecommendImage8 },
			{ name: '1인 가구', link: '/', image: gnbRecommendImage9 },
			{ name: '비건', link: '/', image: gnbRecommendImage10 },
			{ name: '베이커리 맛집', link: '/', image: gnbRecommendImage11 },
			{ name: '오프라인 맛집', link: '/', image: gnbRecommendImage12 },
			{ name: '컬리가 만든 상품', link: '/', image: gnbRecommendImage13 },
			{ name: 'Kurly Only', link: '/', image: gnbRecommendImage14 },
			{ name: 'KF365 / KS365', link: '/', image: gnbRecommendImage15 },
			{ name: '희소가치 프로젝트', link: '/', image: gnbRecommendImage16 },
		],
		has_image: true,
	},
];

export const themeRoutes = [
	{ name: '신상품', link: '/' },
	{ name: '베스트', link: '/' },
	{ name: '알뜰쇼핑', link: '/' },
	{ name: '특가/혜택', link: '/' },
];
