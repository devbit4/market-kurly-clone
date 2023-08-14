import Wrapper from '@components/Wrapper/Wrapper';
import FooterContact from '@components/Footer/FooterContact';
import FooterInfo from '@components/Footer/FooterInfo';

import { IconEprivacy, IconISMS, IconToss, IconWoori, footerLinks, snsLinks } from './footer-lists';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper>
				<section className={styles.footer_top}>
					<div>
						<h3>고객행복센터</h3>
						<div className={styles.contact_work_time}>
							<strong>1644-1107</strong>
							<span>월~토요일 오전 7시 - 오후 6시</span>
						</div>
						<ul>
							<li>
								<FooterContact
									className={styles.contact_group}
									title='카카오톡 문의'
									description='월~토요일 | 오전 7시 ~ 오후 6시,일/공휴일 | 오전 7시 - 오후 1시'
								/>
							</li>
							<li>
								<FooterContact
									className={styles.contact_group}
									title='1:1문의'
									description='365일,고객센터 운영시간에 순차적으로 답변드리겠습니다.'
								/>
							</li>
							<li>
								<FooterContact
									className={styles.contact_group}
									title='대량주문 문의'
									description='월~금요일 | 오전 9시 ~ 오후 6시,점심시간 | 낮 12시 - 오후 1시'
								/>
							</li>
						</ul>
						<span className={styles.contact_guest}>
							비회원 문의 : <a href='mailto:'>help@kurlycorp.com</a>
						</span>
					</div>

					<div>
						<ul className={styles.footer_links}>
							{footerLinks.map(footerLink => (
								<li key={footerLink.title}>
									<a href={footerLink.link}>{footerLink.title}</a>
								</li>
							))}
						</ul>
						<div className={styles.address}>
							법인명 (상호) : 주식회사 컬리 <span aria-hidden>|</span> 사업자등록번호 : 261-81-23567
							<a href=''>사업자정보 확인</a>
							<br />
							통신판매업 : 제 2018-서울강남-01646 호<br />
							주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span aria-hidden>|</span>{' '}
							대표이사 : 김슬아
							<br />
							채용문의 :<a href='mailto:'>recruit@kurlycorp.com</a>
							<br />
							팩스: 070 - 7500 - 6098
						</div>
						<ul className={styles.sns_links}>
							{snsLinks.map(snsLink => (
								<li key={snsLink.title}>
									<a href={snsLink.link}>
										<img src={snsLink.image} alt={snsLink.title} />
									</a>
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className={styles.footer_middle}>
					<FooterInfo imageSrc={IconISMS} className={styles.footer_info}>
						[인증범위] 컬리 쇼핑몰 서비스 개발·운영
						<br />
						(심사받지 않은 물리적 인프라 제외)
						<br />
						[유효기간] 2022.01.19 ~ 2025.01.18
					</FooterInfo>
					<FooterInfo imageSrc={IconEprivacy} className={styles.footer_info}>
						개인정보보호 우수 웹사이트 ·<br />
						개인정보처리시스템 인증 (ePRIVACY PLUS)
					</FooterInfo>
					<FooterInfo imageSrc={IconToss} className={styles.footer_info}>
						토스페이먼츠 구매안전(에스크로)
						<br />
						서비스를 이용하실 수 있습니다.
					</FooterInfo>
					<FooterInfo imageSrc={IconWoori} className={styles.footer_info}>
						고객님이 현금으로 결제한 금액에 대해 우리은행과
						<br />
						채무지급보증 계약을 체결하여 안전거래를 보장하고
						<br />
						있습니다.
					</FooterInfo>
				</section>
			</Wrapper>
			<section className={styles.footer_bottom}>
				<p>
					컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓)
					상품이 포함되어 있습니다.
					<br />
					마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다.
					컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
				</p>
				<strong>© KURLY CORP. ALL RIGHTS RESERVED</strong>
			</section>
		</footer>
	);
};

export default Footer;
