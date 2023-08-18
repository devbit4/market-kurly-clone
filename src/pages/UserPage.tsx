import { createPortal } from 'react-dom';
import { Outlet, useNavigate } from 'react-router-dom';

import Wrapper from '@/components/Wrapper/Wrapper';
import Alert from '@/components/Alert/Alert';

// NOTE : 로그인 기능 추가 시 수정 필요
const isLoggedIn = false;

const UserPage = () => {
	const navigate = useNavigate();
	const handleAlertBtn = () => {
		navigate('/login');
	};

	if (!isLoggedIn) {
		return createPortal(
			<Alert text='로그인 하셔야 본 서비스를 이용하실 수 있습니다' onConfirm={handleAlertBtn} />,
			document.getElementById('modal') as HTMLElement
		);
	}

	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	);
};

export default UserPage;
