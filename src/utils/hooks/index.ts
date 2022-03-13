import {Dispatch, SetStateAction, useState} from 'react';

export const useGetFaviconURL: Function = (websiteURL: string): [string, Dispatch<SetStateAction<string>>] => {
	const [faviconURL, setFaviconURL]: [string, Dispatch<SetStateAction<string>>] = useState(`https://www.google.com/s2/favicons?domain=${websiteURL}`);
	
	return [faviconURL, setFaviconURL];
};
