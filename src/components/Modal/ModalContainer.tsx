import { createPortal } from 'react-dom';

interface Container {
	children: React.ReactNode;
}

function ModalContainer({ children }: Container) {
	return createPortal(<>{children}</>, document.getElementById('modal') as HTMLElement);
}

export default ModalContainer;
