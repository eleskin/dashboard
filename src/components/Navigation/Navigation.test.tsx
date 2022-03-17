import {render, screen} from '@testing-library/react';
import Navigation from './Navigation';

test('Navigation render', () => {
	render(<Navigation/>);
	const firstElement = screen.getAllByText(/Dashboard/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
