import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Main from './Main';
import {BrowserRouter as Router} from 'react-router-dom';

test('Main render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Main/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Balance/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getAllByText(/Profile Completion/i)[0] as HTMLAnchorElement;
	expect(secondElement).toBeInTheDocument();
});
