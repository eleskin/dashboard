import {render, screen} from '@testing-library/react';
import Navigation from './Navigation';

test('Navigation render', () => {
	render(<Navigation/>);
	const element = screen.getByText(/Dashboard/i);
	expect(element).toBeInTheDocument();
});
