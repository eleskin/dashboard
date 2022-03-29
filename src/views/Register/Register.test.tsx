import {render, screen} from '@testing-library/react';
import Register from './Register';

test('Register render', () => {
	render(<Register/>);
	const firstElement = screen.getAllByText(/Please fill in the form fields/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
