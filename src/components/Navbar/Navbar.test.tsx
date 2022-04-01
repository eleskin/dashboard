import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from '../../store';
import Navbar from './Navbar';

test('Navbar render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Navbar/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Clean Admin/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getAllByText(/Incoming mail/i)[0] as HTMLAnchorElement;
	expect(secondElement).toBeInTheDocument();
	
	const thirdElement = screen.getAllByText(/Dashboard/i)[0] as HTMLAnchorElement;
	expect(thirdElement).toBeInTheDocument();
});
