import styles from './App.module.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App: Function = (): JSX.Element => {
	return (
		<div className={styles.App}>
			<Navbar/>
			<Main/>
		</div>
	);
};

export default App;
