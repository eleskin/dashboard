import {render, screen} from '@testing-library/react';
import Metric from './Metric';

test('Logo render', () => {
	render(<Metric title="CALLS" value="150" changing={-12}/>);
	const linkElement = screen.getByText(/CALLS/i);
	expect(linkElement).toBeInTheDocument();
});
