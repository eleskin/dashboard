import styles from './Headline.module.css';

const Headline: Function = ({theme}: {theme: string}): JSX.Element => (
	<span className={`${styles.Headline} ${theme === 'dark' ? styles.Headline__dark : ''}`}/>
);

export default Headline;
