import {render, screen} from '@testing-library/react';
import Card from './Card';

test('Card render', () => {
	render(<Card>Card</Card>);
	const element = screen.getByText(/Card/i);
	expect(element).toBeInTheDocument();
});
