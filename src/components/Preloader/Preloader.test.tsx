import {render, screen} from '@testing-library/react';
import Preloader from './Preloader';

test('Preloader render', () => {
	render(<Preloader>Preloader render</Preloader>);
	const firstElement = screen.getAllByText(/Preloader render/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
