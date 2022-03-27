import {render, screen} from '@testing-library/react';
import Form from './Form';

test('Form render', () => {
	render(
		<Form.Input
			label="Your Full Name"
			type="text"
			placeholder="Enter your Full Name"
		/>,
	);
	render(
		<Form.Select
			label="Your Role"
			options={['Web Developer', 'Business Owner', 'Other']}
		/>
	);
	
	const firstElement = screen.getAllByText(/Your Full Name/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getAllByText(/Web Developer/i)[0] as HTMLAnchorElement;
	expect(secondElement).toBeInTheDocument();
});
