import {render, screen} from '@testing-library/react';
import Home from './Home';

test('Home render', () => {
	render(<Home/>);
	const firstElement = screen.getAllByText(/Metrics/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getAllByText(/Sales Dashboard/i)[0] as HTMLAnchorElement;
	expect(secondElement).toBeInTheDocument();
	
	const thirdElement = screen.getAllByText(/UX usability/i)[0] as HTMLAnchorElement;
	expect(thirdElement).toBeInTheDocument();
});
