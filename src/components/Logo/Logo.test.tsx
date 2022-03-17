import {render, screen} from '@testing-library/react';
import Logo from './Logo';

test('Logo render', () => {
	render(<Logo/>);
	const firstElement = screen.getAllByText(/CLEAN ADMIN/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
