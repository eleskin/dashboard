import {render, screen} from '@testing-library/react';
import Bonus from './Bonus';

test('Bonus render', () => {
	render(<Bonus/>)
	const element = screen.getByText(/BONUS/i);
	expect(element).toBeInTheDocument();
});
