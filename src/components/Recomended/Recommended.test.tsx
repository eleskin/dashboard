import {render, screen} from '@testing-library/react';
import Recommended from './Recommended';

test('Recommended render', () => {
	render(<Recommended/>);
	const element = screen.getByText(/Recommended/i);
	expect(element).toBeInTheDocument();
});
