import {render, screen} from '@testing-library/react';
import Steps from './Steps';
import {BrowserRouter as Router} from 'react-router-dom';

test('Steps render', () => {
	render(
		<Router>
			<Steps/>
		</Router>
	);
	const firstElement = screen.getAllByText(/Signup account/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
