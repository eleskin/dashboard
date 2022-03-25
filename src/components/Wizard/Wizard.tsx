import {SwipeableHandlers, useSwipeable} from 'react-swipeable';
import {useOutsideClickHandler} from '../../utils/hooks';
import styles from './Wizard.module.css';
import {
	createRef,
	Dispatch,
	LegacyRef,
	RefObject,
	SetStateAction,
	useEffect,
	useMemo,
	useState,
} from 'react';
import wizard_image_1 from '../../assets/images/wizard/wizard-image-1.png';
import wizard_image_2 from '../../assets/images/wizard/wizard-image-2.png';
import wizard_image_3 from '../../assets/images/wizard/wizard-image-3.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Wizard: Function = ({
	                          isVisibleWizard,
	                          setIsVisibleWizard,
                          }: { isVisibleWizard: boolean, setIsVisibleWizard: Dispatch<SetStateAction<boolean>> }): JSX.Element => {
	const [activeSlide, setActiveSlide]: [number, Dispatch<SetStateAction<number>>] = useState(0);
	
	const firstSlide: LegacyRef<HTMLDivElement> | undefined = createRef();
	const secondSlide: LegacyRef<HTMLDivElement> | undefined = createRef();
	const thirdSlide: LegacyRef<HTMLDivElement> | undefined = createRef();
	
	const slides: RefObject<HTMLDivElement>[] = useMemo((): RefObject<HTMLDivElement>[] => [firstSlide, secondSlide, thirdSlide], [firstSlide, secondSlide, thirdSlide]);
	const images: Array<string> = useMemo((): Array<string> => [wizard_image_1, wizard_image_2, wizard_image_3], []);
	
	const [computedHeight, setComputedHeight]: [string, Dispatch<SetStateAction<string>>] = useState('fit-content');
	
	const wizardElement: LegacyRef<HTMLDivElement> | undefined = createRef();
	
	useOutsideClickHandler(wizardElement, isVisibleWizard, setIsVisibleWizard);
	
	const wizardSwipeHandlers: SwipeableHandlers = useSwipeable({
		onSwipedLeft: (): void => setActiveSlide(activeSlide + 1),
		onSwipedRight: (): void => setActiveSlide(activeSlide - 1),
		trackMouse: true,
	});
	
	useEffect((): void => {
		const image: HTMLImageElement = new Image();
		image.src = images[activeSlide];
		image.addEventListener('load', (): void => {
			setComputedHeight(window.getComputedStyle(slides[activeSlide].current as Element).height);
		});
	}, [activeSlide, images, slides]);
	
	return (
		<div className={`${styles.Wizard} ${isVisibleWizard ? styles.Wizard_active : ''}`}>
			<div className={styles.Wizard__wrapper} ref={wizardElement}>
				<div
					className={styles.Wizard__container}
					style={{
						height: `${parseFloat(computedHeight) + 40}px`,
					}}
				>
					<button className={styles.Wizard__close} onClick={() => setIsVisibleWizard(false)}>Close</button>
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
								<form className={styles.Wizard__form}>
									<label>
										<span>Your Full Name</span>
										<input type="text" placeholder="Enter your full name..."/>
									</label>
									<label>
										<span>Your Role</span>
										<select>
											<option>
												Web Developer
											</option>
											<option>
												Business Owner
											</option>
											<option>
												Other
											</option>
										</select>
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
					{activeSlide > 0 && (
						<button
							onClick={() => setActiveSlide(activeSlide - 1)}
							className={styles.Wizard__previous}
						>
							<FontAwesomeIcon icon={faArrowLeft}/>
							<span>Previous</span>
						</button>
					)}
					<div className={styles.Wizard__dots}>
						{slides.map((value: RefObject<HTMLDivElement>, index: number): JSX.Element => (
							<button
								key={index}
								className={`${styles.Wizard__dot} ${activeSlide === index ? styles.Wizard__dot_active : ''}`}
								onClick={(): void => setActiveSlide(index)}
							/>
						))}
					</div>
					{activeSlide < slides.length - 1 && (
						<button
							onClick={() => setActiveSlide(activeSlide + 1)}
							className={styles.Wizard__next}
						>
							<span>Next</span>
							<FontAwesomeIcon icon={faArrowRight}/>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Wizard;
