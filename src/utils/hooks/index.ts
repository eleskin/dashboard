import {Dispatch, SetStateAction, useEffect} from 'react';

export const useOutsideClickHandler: Function = (
	ref: { current: { contains: (arg0: Node) => Element; }; },
	isActive: boolean,
	setIsActive: Dispatch<SetStateAction<boolean>>,
): void => {
	return useEffect((): () => void => {
		const onClick: (event: Event) => void = (event: Event): void => {
			if (ref) ref.current?.contains(event.target as Node) || (isActive && setIsActive(false));
		};
		document.addEventListener('click', onClick);
		return (): void => document.removeEventListener('click', onClick);
	}, [ref, isActive, setIsActive]);
};
