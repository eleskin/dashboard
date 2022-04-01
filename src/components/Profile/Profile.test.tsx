import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Profile from './Profile';
import {BrowserRouter as Router} from 'react-router-dom';

test('Profile render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Profile/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Profile Completion/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
	
	const secondElement = screen.getAllByText(/%/i)[0] as HTMLAnchorElement;
	expect(secondElement).toBeInTheDocument();
	
	const thirdElement = screen.getAllByText(/Signup account/i)[0] as HTMLAnchorElement;
	expect(thirdElement).toBeInTheDocument();
	
	const fourthElement = screen.getAllByText(/BONUS/i)[0] as HTMLAnchorElement;
	expect(fourthElement).toBeInTheDocument();
});
