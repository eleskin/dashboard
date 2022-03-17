import {render, screen} from '@testing-library/react';
import Service from './Service';

test('Service render', () => {
	render(<Service tag="UX usability" title="10 Criteria for Explosive Sales Growth"/>);
	const firstElement = screen.getAllByText(/UX usability/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getAllByText(/10 Criteria for Explosive Sales Growth/i)[0] as HTMLAnchorElement;
	expect(secondElement).toBeInTheDocument();
});
