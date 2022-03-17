import {render, screen} from '@testing-library/react';
import Recommended from './Recommended';

test('Recommended render', () => {
	render(<Recommended/>);
	const firstElement = screen.getAllByText(/Recommended/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
