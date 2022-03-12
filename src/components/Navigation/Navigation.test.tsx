import {render, screen} from '@testing-library/react';
import Navigation from './Navigation';

test('Navigation render', () => {
	render(<Navigation/>);
	const linkElement = screen.getByText(/Dashboard/i);
	expect(linkElement).toBeInTheDocument();
});
