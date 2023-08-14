import { createContext, useCallback, useMemo, useState } from 'react';
import * as uuid from 'uuid';

type Dispatch = {
	open: (Component: any, props: any) => void;
	close: (id: string) => void;
};

type Props = {
	children: React.ReactNode;
};

type Modal = {
	Component: React.ElementType;
	id: string;
	props: any;
};
export const ModalsDispatchContext = createContext<Dispatch>({
	open: () => {},
	close: () => {},
});

export const ModalsStateContext = createContext<Modal[] | []>([]);

const ModalsProvider = ({ children }: Props) => {
	const [openedModals, setOpenedModals] = useState<Modal[]>([]);

	window.console.log(openedModals);
	const open = useCallback((Component: any, props: any) => {
		const id = uuid.v4();

		setOpenedModals(prev => {
			return [...prev, { Component, props, id }];
		});
	}, []);

	const close = useCallback((id: string) => {
		setOpenedModals(prev =>
			prev.filter(modal => {
				return modal.id !== id;
			})
		);
	}, []);

	const dispatch = useMemo(() => ({ open, close }), [open, close]);

	return (
		<ModalsStateContext.Provider value={openedModals}>
			<ModalsDispatchContext.Provider value={dispatch}>
				{children}
				{openedModals.map(({ Component, props: { onSubmit, ...restProps }, id }: Modal, index) => {
					const onClose = () => {
						close(id);
					};

					const handleSubmit = async () => {
						await onSubmit();

						close(id);
					};

					return (
						<Component
							{...restProps}
							key={index}
							onClose={onClose}
							onSubmit={handleSubmit}
							id={id}
						></Component>
					);
				})}
			</ModalsDispatchContext.Provider>
		</ModalsStateContext.Provider>
	);
};

export default ModalsProvider;
