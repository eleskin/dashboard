import {render, screen} from '@testing-library/react';
import Metrics from './Metrics';

test('Metrics render', () => {
	render(<Metrics/>);
	const firstElement = screen.getAllByText(/Metric/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
