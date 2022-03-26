import {Dispatch, LegacyRef, SetStateAction} from 'react';
import {SwipeableHandlers, useSwipeable} from 'react-swipeable';
import styles from '../Wizard/Wizard.module.css';
import wizard_image_1 from '../../assets/images/wizard/wizard-image-1.png';
import wizard_image_2 from '../../assets/images/wizard/wizard-image-2.png';
import wizard_image_3 from '../../assets/images/wizard/wizard-image-3.png';

interface IWizardSlider {
	activeSlide: number,
	setActiveSlide: Dispatch<SetStateAction<number>>,
	secondSlide: LegacyRef<HTMLDivElement> | undefined,
	thirdSlide: LegacyRef<HTMLDivElement> | undefined,
	firstSlide: LegacyRef<HTMLDivElement> | undefined
}

const WizardSlider: Function = ({
	                                activeSlide,
	                                setActiveSlide,
	                                firstSlide,
	                                secondSlide,
	                                thirdSlide,
                                }: IWizardSlider): JSX.Element => {
	const wizardSwipeHandlers: SwipeableHandlers = useSwipeable({
		onSwipedLeft: (): void => setActiveSlide(activeSlide + 1),
		onSwipedRight: (): void => setActiveSlide(activeSlide - 1),
		trackMouse: true,
	});
	
	return (
		<div className={styles.Wizard__slider} {...wizardSwipeHandlers}>
			<div
				className={`${styles.Wizard__slide} ${activeSlide === 0 ? styles.Wizard__slide_active : ''}`}
				style={{transform: `translateX(${-100 * activeSlide}%)`}}
				ref={firstSlide}
			>
				<div className={styles.Wizard__image}>
					<img src={wizard_image_1} width={200} alt=""/>
				</div>
				<div className={styles.Wizard__content}>
					<h4 className={styles.Wizard__title}>
						Example of onboarding screen!
					</h4>
					<p className={styles.Wizard__text}>
						This is an example of a multistep onboarding screen, you can use it to
						introduce your customers to your app, or collect additional information
						from them before they start using your app.
					</p>
				</div>
			</div>
			<div
				className={`${styles.Wizard__slide} ${activeSlide === 1 ? styles.Wizard__slide_active : ''}`}
				style={{transform: `translateX(${-100 * activeSlide}%)`}}
				ref={secondSlide}
			>
				<div className={styles.Wizard__image}>
					<img src={wizard_image_2} width={200} alt=""/>
				</div>
				<div className={styles.Wizard__content}>
					<h4 className={styles.Wizard__title}>
						Example Request Information
					</h4>
					<p className={styles.Wizard__text}>
						In this example you can see a form where you can request some additional information from the customer
						when they land on the app page.
					</p>
					<form className={`${styles.Wizard__form} ${styles.Wizard__form_one}`}>
						<label>
							<span>Website address</span>
							<input type="text" placeholder="Enter website address"/>
						</label>
					</form>
				</div>
			</div>
			<div
				className={`${styles.Wizard__slide} ${activeSlide === 2 ? styles.Wizard__slide_active : ''}`}
				style={{transform: `translateX(${-100 * activeSlide}%)`}}
				ref={thirdSlide}
			>
				<div className={styles.Wizard__image}>
					<img src={wizard_image_3} width={200} alt=""/>
				</div>
				<div className={styles.Wizard__content}>
					<h4 className={styles.Wizard__title}>
						Showcase App Features
					</h4>
					<p className={styles.Wizard__text}>
						In this example you can showcase some of the features of your application, it is very handy to make
						new
						users aware of your hidden features. You can use boostrap columns to split them up.
					</p>
					<div className={styles.Wizard__lists}>
						<ul className={styles.Wizard__list}>
							<li>
								Fully Responsive design
							</li>
							<li>
								Pre-built app layouts
							</li>
							<li>
								Incredible Flexibility
							</li>
						</ul>
						<ul className={styles.Wizard__list}>
							<li>
								Boxed & Full Layouts
							</li>
							<li>
								Based on Bootstrap 4
							</li>
							<li>
								Developer Friendly
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WizardSlider;
