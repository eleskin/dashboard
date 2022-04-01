import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Register from './Register';
import {BrowserRouter as Router} from 'react-router-dom';

test('Register render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Register/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Please fill in the form fields/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
