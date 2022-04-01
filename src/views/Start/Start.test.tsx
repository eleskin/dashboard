import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Start from './Start';
import {BrowserRouter as Router} from 'react-router-dom';

test('Start render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Start/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Get Started/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
