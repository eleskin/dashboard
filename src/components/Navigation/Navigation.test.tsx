import {render, screen} from '@testing-library/react';
import Navigation from './Navigation';
import {BrowserRouter as Router} from 'react-router-dom';

test('Navigation render', () => {
	render(
		<Router>
			<Navigation/>
		</Router>
	);
	const firstElement = screen.getAllByText(/Dashboard/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
