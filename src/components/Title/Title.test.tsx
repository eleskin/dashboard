import {render, screen} from '@testing-library/react';
import Title from './Title';

test('Title render', () => {
	render(<Title value={'Sales Dashboard'}/>);
	const linkElement = screen.getByText(/Sales Dashboard/i);
	expect(linkElement).toBeInTheDocument();
});
