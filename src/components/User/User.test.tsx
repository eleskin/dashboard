import {render, screen} from '@testing-library/react';
import User from './User';

test('User render', () => {
	render(<User/>);
	const element = screen.getAllByText(/12/i)[0] as HTMLAnchorElement;
	expect(element).toBeInTheDocument();
});
