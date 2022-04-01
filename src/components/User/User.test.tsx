import {render, screen} from '@testing-library/react';
import User from './User';
import {BrowserRouter as Router} from 'react-router-dom';

test('User render', () => {
	render(
		<Router>
			<User/>
		</Router>
	);
	const firstElement = screen.getAllByText(/12/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
