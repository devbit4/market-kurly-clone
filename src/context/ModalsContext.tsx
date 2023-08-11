import Modals from '@/components/Modal/Modals';
import { Component, createContext, useMemo, useState } from 'react';

export const ModalsDispatchContext = createContext({
	open: () => {},
	close: () => {},
});
export const ModalsStateContext = createContext([]);

// eslint-disable-next-line react/prop-types
const ModalsProvider = ({ children }) => {
	const [openedModals, setOpenedModals] = useState([]);

	const open = (Component, props) => {
		setOpenedModals(prev => {
			return [...prev, { Component, props }];
		});
	};

	const close = Component => {
		setOpenedModals(modals => {
			return modals.filter(modal => {
				return modal.Component !== Component;
			});
		});
	};

	const dispatch = useMemo(() => ({ open, close }), []);

	return (
		<ModalsStateContext.Provider value={openedModals}>
			<ModalsDispatchContext.Provider value={dispatch}>
				{children}
				<Modals />
			</ModalsDispatchContext.Provider>
		</ModalsStateContext.Provider>
	);
};

export default ModalsProvider;
