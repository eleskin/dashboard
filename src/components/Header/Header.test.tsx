import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom';

test('Header render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Header/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Balance/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
