import {Navigate} from 'react-router-dom';

const PrivateRoute: Function = ({
	                                children,
	                                isAuth,
                                }: { children: JSX.Element | any, isAuth: boolean }): JSX.Element | null => {
	if (isAuth === null) return null;
	
	return isAuth ? children : <Navigate to="/start"/>;
};

export default PrivateRoute;
