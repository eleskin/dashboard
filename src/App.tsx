import {Dispatch as ReduxDispatch} from '@reduxjs/toolkit';
import {connect, useDispatch} from 'react-redux';
import styles from './App.module.css';
import {Dispatch, JSXElementConstructor, SetStateAction, useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import Wizard from './components/Wizard/Wizard';
import NullRoute from './router/NullRoute/NullRoute';
import PrivateRoute from './router/PrivateRoute/PrivateRoute';
import PublicRoute from './router/PublicRoute/PublicRoute';
import {getWebsites} from './store/slices/websites';
import Home from './views/Home/Home';
import Start from './views/Start/Start';
import Register from './views/Register/Register';
import Login from './views/Login/Login';

const App: JSXElementConstructor<any> = ({
	                                         isLoading,
	                                         isAuth,
	                                         isRegistered,
                                         }: { isLoading: boolean, isAuth: boolean, isRegistered: boolean }): JSX.Element => {
	const dispatch: ReduxDispatch = useDispatch();
	const [isHovering, setIsHovering]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	const [isVisibleWizard, setIsVisibleWizard]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(true));
	
	useEffect((): void => {
		dispatch(getWebsites());
	}, [dispatch, isAuth, isRegistered]);
	
	return (
		<div className={styles.App}>
			<Preloader isLoading={isLoading}>
				{isAuth && <Navbar isHovering={isHovering} setIsHovering={setIsHovering}/>}
				<Routes>
					<Route path="/home" element={
						<PrivateRoute isAuth={isAuth}>
							<Main setIsHovering={setIsHovering}>
								<Home/>
							</Main>
						</PrivateRoute>
					}/>
					
					<Route path="/home/:website" element={
						<PrivateRoute isAuth={isAuth}>
							<Main setIsHovering={setIsHovering}>
								<Home/>
							</Main>
						</PrivateRoute>
					}/>
					
					<Route path="/register" element={
						<PrivateRoute isAuth={isAuth}>
							<Main setIsHovering={setIsHovering}>
								<Register/>
							</Main>
						</PrivateRoute>
					}/>
					
					<Route path="/login" element={
						<PrivateRoute isAuth={isAuth}>
							<Main setIsHovering={setIsHovering}>
								<Login/>
							</Main>
						</PrivateRoute>
					}/>
					
					<Route path="/start" element={
						<PublicRoute isAuth={isAuth}>
							<Start/>
						</PublicRoute>
					}/>
					
					<Route path="/start-login" element={
						<PublicRoute isAuth={isAuth}>
							<Login/>
						</PublicRoute>
					}/>
					<Route path="*" element={<NullRoute isAuth={isAuth}/>}/>
				</Routes>
				{isAuth && <Wizard isVisibleWizard={isVisibleWizard} setIsVisibleWizard={setIsVisibleWizard}/>}
			</Preloader>
		</div>
	);
};

export default connect(
	(state: any): any => ({
		isLoading: state.userSlice.isLoading,
		isAuth: state.userSlice.isAuth,
		isRegistered: state.userSlice.isRegistered,
	}),
)(App);
