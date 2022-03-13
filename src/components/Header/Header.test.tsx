import {render, screen} from '@testing-library/react';
import Header from './Header';

test('Header render', () => {
	render(<Header/>);
	const element = screen.getAllByText(/Balance/i)[0] as HTMLAnchorElement;
	expect(element).toBeInTheDocument();
});
