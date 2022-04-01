import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Account from './Account';
import {BrowserRouter as Router} from 'react-router-dom';

test('Account render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Account/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Incoming Mail/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
