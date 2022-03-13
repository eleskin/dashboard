import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar render', () => {
	render(<Navbar/>);
	const firstElement = screen.getByText(/Clean Admin/i);
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getByText(/Incoming mail/i);
	expect(secondElement).toBeInTheDocument();
	
	const thirdElement = screen.getByText(/Dashboard/i);
	expect(thirdElement).toBeInTheDocument();
});
