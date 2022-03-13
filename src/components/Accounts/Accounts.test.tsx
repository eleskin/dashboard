import {render, screen} from '@testing-library/react';
import Accounts from './Accounts';

test('Accounts render', () => {
	render(<Accounts/>);
	const element = screen.getAllByText(/Balance/i)[0] as HTMLAnchorElement;
	expect(element).toBeInTheDocument();
});
