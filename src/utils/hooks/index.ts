import {Dispatch, SetStateAction, useEffect, useState} from 'react';

export const useGetFaviconURL: Function = (websiteURL: string): [string, Dispatch<SetStateAction<string>>] => {
	const [faviconURL, setFaviconURL]: [string, Dispatch<SetStateAction<string>>] = useState(`https://www.google.com/s2/favicons?domain=${websiteURL}`);
	
	return [faviconURL, setFaviconURL];
};

export const useOutsideClickHandler: Function = (
	ref: { current: { contains: (arg0: Node) => Element; }; },
	isActiveDropdown: boolean,
	setIsActiveDropdown: Dispatch<SetStateAction<boolean>>,
): void => {
	return useEffect((): () => void => {
		const onClick: (event: Event) => void = (event: Event): void => {
			if (ref) ref.current?.contains(event.target as Node) || (isActiveDropdown && setIsActiveDropdown(false));
		};
		document.addEventListener('click', onClick);
		return (): void => document.removeEventListener('click', onClick);
	}, [ref, isActiveDropdown, setIsActiveDropdown]);
};
