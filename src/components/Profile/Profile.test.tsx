import {render, screen} from '@testing-library/react';
import Profile from './Profile';

test('Profile render', () => {
	render(<Profile/>);
	const firstElement = screen.getByText(/Profile Completion/i);
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getByText(/%/i);
	expect(secondElement).toBeInTheDocument();
	
	const thirdElement = screen.getByText(/Signup account/i);
	expect(thirdElement).toBeInTheDocument();
	
	const fourthElement = screen.getByText(/BONUS/i);
	expect(fourthElement).toBeInTheDocument();
});
