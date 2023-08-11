import Modals from '@/components/Modal/Modals';
import { Component, createContext, useMemo, useState } from 'react';
import * as uuid from 'uuid';

export const ModalsDispatchContext = createContext({
	open: () => {},
	close: () => {},
});
export const ModalsStateContext = createContext([]);

// eslint-disable-next-line react/prop-types
const ModalsProvider = ({ children }) => {
	const [openedModals, setOpenedModals] = useState([]);

	const open = (Component, props) => {
		const id = uuid.v4();

		setOpenedModals(prev => {
			return [...prev, { Component, props, id }];
		});
	};

	const close = id => {
		setOpenedModals(prev =>
			prev.filter(modal => {
				return modal.id !== id;
			})
		);

		// setOpenedModals(modals => {
		// 	return modals.filter(modal => {
		// 		return modal.Component !== Component;
		// 	});
		// });
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
