import {render, screen} from '@testing-library/react';
import Service from './Service';

test('Service render', () => {
	render(<Service tag="UX usability" title="10 Criteria for Explosive Sales Growth"/>);
	const firstElement = screen.getByText(/UX usability/i);
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getByText(/10 Criteria for Explosive Sales Growth/i);
	expect(secondElement).toBeInTheDocument();
});
