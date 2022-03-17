import {render, screen} from '@testing-library/react';
import Steps from './Steps';

test('Steps render', () => {
	render(<Steps/>);
	const firstElement = screen.getAllByText(/Signup account/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
