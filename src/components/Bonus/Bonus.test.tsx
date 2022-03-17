import {render, screen} from '@testing-library/react';
import Bonus from './Bonus';

test('Bonus render', () => {
	render(<Bonus/>)
	const firstElement = screen.getAllByText(/BONUS/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
