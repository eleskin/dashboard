import {Dispatch, SetStateAction, useState} from 'react';
import styles from './App.module.css';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App: Function = (): JSX.Element => {
	const [isHovering, setIsHovering]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	
	return (
		<div className={styles.App}>
			<Navbar isHovering={isHovering} setIsHovering={setIsHovering}/>
			<Main setIsHovering={setIsHovering}/>
		</div>
	);
};

export default App;
