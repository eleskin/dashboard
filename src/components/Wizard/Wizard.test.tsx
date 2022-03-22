import {render, screen} from '@testing-library/react';
import Wizard from './Wizard';

test('Wizard render', () => {
	render(<Wizard/>);
	const firstElement = screen.getAllByText(/Example Request Information/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
