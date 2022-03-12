import {render, screen} from '@testing-library/react';
import Account from './Account';

test('Account render', () => {
	render(<Account/>);
	const linkElement = screen.getByText(/Incoming Mail/i);
	expect(linkElement).toBeInTheDocument();
});
