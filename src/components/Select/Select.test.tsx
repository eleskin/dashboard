import {render, screen} from '@testing-library/react';
import Select from './Select';

test('Select render', () => {
	render(<Select options={['Today', 'Last week', 'Last month']}/>);
	const firstElement = screen.getAllByText(/Today/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
