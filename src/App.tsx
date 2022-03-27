import styles from './App.module.css';
import {Dispatch, SetStateAction, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Wizard from './components/Wizard/Wizard';
import NullRoute from './router/NullRoute/NullRoute';
import PrivateRoute from './router/PrivateRoute/PrivateRoute';
import PublicRoute from './router/PublicRoute/PublicRoute';
import Home from './views/Home/Home';

const App: Function = (): JSX.Element => {
	const [isHovering, setIsHovering]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	const [isVisibleWizard, setIsVisibleWizard]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(true));
	
	const isAuth = true;
	
	return (
		<div className={styles.App}>
			<Navbar isHovering={isHovering} setIsHovering={setIsHovering}/>
			<Routes>
				<Route path="/home" element={
					<PrivateRoute isAuth={isAuth}>
						<Main setIsHovering={setIsHovering}>
							<Home/>
						</Main>
					</PrivateRoute>
				}/>
				
				<Route path="/login" element={
					<PublicRoute isAuth={isAuth}>
					
					</PublicRoute>
				}/>
				<Route path="*" element={<NullRoute isAuth={isAuth}/>}/>
			</Routes>
			<Wizard isVisibleWizard={isVisibleWizard} setIsVisibleWizard={setIsVisibleWizard}/>
		</div>
	);
};

export default App;
