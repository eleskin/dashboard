import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';

const App: Function = (): JSX.Element => {
	return (
		<div className={styles.App}>
			<Navbar/>
		</div>
	);
};

export default App;
