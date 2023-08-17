import { useEffect, RefObject } from 'react';

function useOutSideClick(ref: RefObject<HTMLElement>, callback: () => void) {
	useEffect(() => {
		function handleClick(event: Event) {
			event.preventDefault();

			if (ref.current && !ref.current.contains(event.target as Node | null)) {
				callback && callback();
			}
		}

		window.addEventListener('mousedown', handleClick);

		return () => window.removeEventListener('mousedown', handleClick);
	}, [ref, callback]);
}

export default useOutSideClick;
