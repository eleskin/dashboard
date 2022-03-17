import {render, screen} from '@testing-library/react';
import Statistic from './Statistic';

test('Statistic render', () => {
	render(<Statistic/>);
	const firstElement = screen.getAllByText(/Sales Dashboard/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
