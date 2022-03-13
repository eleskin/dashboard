import {render, screen} from '@testing-library/react';
import Account from './Account';

test('Account render', () => {
	render(<Account/>);
	const element = screen.getByText(/Incoming Mail/i);
	expect(element).toBeInTheDocument();
});
