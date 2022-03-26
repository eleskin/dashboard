import {render, screen} from '@testing-library/react';
import WizardSlider from './WizardSlider';

test('WizardSlider render', () => {
	render(<WizardSlider/>);
	const firstElement = screen.getAllByText(/This is an example of a multistep onboarding screen/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
