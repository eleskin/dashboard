import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Accounts from './Accounts';

test('Accounts render', () => {
	render(
		<Provider store={store}>
			<Accounts/>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Balance/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
