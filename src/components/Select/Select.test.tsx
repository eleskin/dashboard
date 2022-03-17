import {render, screen} from '@testing-library/react';
import Select from './Select';

test('Select render', () => {
	render(<Select options={['Today', 'Last week', 'Last month']}/>);
	const linkElement = screen.getByText(/Today/i);
	expect(linkElement).toBeInTheDocument();
});
