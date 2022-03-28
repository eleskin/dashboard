import {Navigate} from 'react-router-dom';

const PublicRoute: Function = ({
	                               children,
	                               isAuth,
                               }: { children: JSX.Element | any, isAuth: boolean }): JSX.Element | null => {
	if (isAuth === null) return null;
	
	return !isAuth ? children : <Navigate to="/home"/>;
};

export default PublicRoute;
