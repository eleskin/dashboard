import {render, screen} from '@testing-library/react';
import Main from './Main';

test('Main render', () => {
	render(<Main/>);
	const firstElement = screen.getAllByText(/Apple.com/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getAllByText(/Users/i)[0] as HTMLAnchorElement;
	expect(secondElement).toBeInTheDocument();
	
	const thirdElement = screen.getAllByText(/UX usability/i)[0] as HTMLAnchorElement;
	expect(thirdElement).toBeInTheDocument();
});
