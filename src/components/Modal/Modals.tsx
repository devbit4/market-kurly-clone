import { ModalsDispatchContext, ModalsStateContext } from '@/context/ModalsContext';
import { Component, useContext } from 'react';

const Modals = () => {
	const openedModals = useContext(ModalsStateContext);

	const { close } = useContext(ModalsDispatchContext);

	return openedModals.map((modal, index) => {
		const { Component, props, id } = modal;

		const { onSubmit, ...restProps } = props;

		const onClose = () => {
			close(id);
		};

		const handleSubmit = async () => {
			if (typeof onSubmit === 'function') {
				await onSubmit();
			}
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
	});
};

export default Modals;
