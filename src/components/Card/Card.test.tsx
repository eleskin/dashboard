import {render, screen} from '@testing-library/react';
import Card from './Card';

test('Card render', () => {
	render(<Card>Card</Card>);
	const firstElement = screen.getAllByText(/Card/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
