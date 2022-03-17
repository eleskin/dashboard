import {render, screen} from '@testing-library/react';
import Accounts from './Accounts';

test('Accounts render', () => {
	render(<Accounts/>);
	const firstElement = screen.getAllByText(/Balance/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
