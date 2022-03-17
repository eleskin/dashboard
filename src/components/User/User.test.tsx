import {render, screen} from '@testing-library/react';
import User from './User';

test('User render', () => {
	render(<User/>);
	const firstElement = screen.getAllByText(/12/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
