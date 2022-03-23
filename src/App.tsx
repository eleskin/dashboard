import styles from './App.module.css';
import {Dispatch, SetStateAction, useState} from 'react';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Wizard from './components/Wizard/Wizard';

const App: Function = (): JSX.Element => {
	const [isHovering, setIsHovering]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	const [isVisibleWizard, setIsVisibleWizard]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(true));
	
	return (
		<div className={styles.App}>
			<Navbar isHovering={isHovering} setIsHovering={setIsHovering}/>
			<Main setIsHovering={setIsHovering}/>
			<Wizard isVisibleWizard={isVisibleWizard} setIsVisibleWizard={setIsVisibleWizard}/>
		</div>
	);
};

export default App;
