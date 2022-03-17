import {render, screen} from '@testing-library/react';
import Title from './Title';

test('Title render', () => {
	render(<Title value={'Sales Dashboard'}/>);
	const firstElement = screen.getAllByText(/Sales Dashboard/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
