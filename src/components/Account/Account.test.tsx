import {render, screen} from '@testing-library/react';
import Account from './Account';

test('Account render', () => {
	render(<Account/>);
	const firstElement = screen.getAllByText(/Incoming Mail/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
