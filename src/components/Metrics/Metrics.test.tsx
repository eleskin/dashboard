import {render, screen} from '@testing-library/react';
import Metrics from './Metrics';

test('Metrics render', () => {
	render(<Metrics/>);
	const linkElement = screen.getByText(/Metric/i);
	expect(linkElement).toBeInTheDocument();
});
