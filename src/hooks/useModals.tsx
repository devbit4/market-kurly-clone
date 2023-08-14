import { useContext } from 'react';

import { ModalsDispatchContext } from '@/context/ModalsContext';

export default function useModals() {
	const { open, close } = useContext(ModalsDispatchContext);

	const openModal = (Component: any, props: any) => {
		open(Component, props);
	};

	const closeModal = (id: string) => {
		close(id);
	};

	return {
		openModal,
		closeModal,
	};
}
