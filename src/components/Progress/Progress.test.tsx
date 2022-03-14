import {render, screen} from '@testing-library/react';
import Progress from './Progress';

test('Progress render', () => {
	render(<Progress/>);
	const element = screen.getAllByText(/%/i)[0] as HTMLAnchorElement;
	expect(element).toBeInTheDocument();
});
