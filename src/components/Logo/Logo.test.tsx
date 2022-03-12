import {render, screen} from '@testing-library/react';
import Logo from './Logo';

test('Logo render', () => {
	render(<Logo/>);
	const linkElement = screen.getByText(/CLEAN ADMIN/i);
	expect(linkElement).toBeInTheDocument();
});
