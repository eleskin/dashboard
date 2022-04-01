import {render, screen} from '@testing-library/react';
import Logo from './Logo';
import {BrowserRouter as Router} from 'react-router-dom';

test('Logo render', () => {
	render(
		<Router>
			<Logo/>
		</Router>,
	);
	const firstElement = screen.getAllByText(/CLEAN ADMIN/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
