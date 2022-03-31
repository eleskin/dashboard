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
import WizardSlider from '../WizardSlider/WizardSlider';
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
	
	useEffect((): void => {
		const image: HTMLImageElement = new Image();
		image.src = images[activeSlide];
		image.addEventListener('load', (): void => {
			if (slides[activeSlide].current) {
				setComputedHeight(window.getComputedStyle(slides[activeSlide].current as Element).height);
			}
		});
	}, [activeSlide, images, slides]);
	
	return (
		<div className={`${styles.Wizard} ${isVisibleWizard ? styles.Wizard_active : ''}`}>
			<div className={styles.Wizard__overlay} onClick={(): void => setIsVisibleWizard(false)}/>
			<div className={styles.Wizard__wrapper}>
				<div
					className={styles.Wizard__container}
					style={{
						height: `${parseFloat(computedHeight) + 40}px`,
					}}
				>
					<button className={styles.Wizard__close} onClick={(): void => setIsVisibleWizard(false)}>Close</button>
					<WizardSlider
						activeSlide={activeSlide}
						setIsVisibleWizard={setIsVisibleWizard}
						firstSlide={firstSlide}
						secondSlide={secondSlide}
						thirdSlide={thirdSlide}
					/>
					{activeSlide > 0 && (
						<button
							onClick={(): void => setActiveSlide(activeSlide - 1)}
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
							onClick={(): void => setActiveSlide(activeSlide + 1)}
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
