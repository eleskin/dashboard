import {render, screen} from '@testing-library/react';
import Header from './Header';

test('Header render', () => {
	render(<Header/>);
	const firstElement = screen.getAllByText(/Balance/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
