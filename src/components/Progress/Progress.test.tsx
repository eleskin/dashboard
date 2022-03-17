import {render, screen} from '@testing-library/react';
import Progress from './Progress';

test('Progress render', () => {
	render(<Progress/>);
	const firstElement = screen.getAllByText(/%/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
