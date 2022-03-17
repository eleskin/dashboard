import {render, screen} from '@testing-library/react';
import Metric from './Metric';

test('Metric render', () => {
	render(<Metric title="CALLS" value="150" changing={-12}/>);
	const firstElement = screen.getAllByText(/CALLS/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
