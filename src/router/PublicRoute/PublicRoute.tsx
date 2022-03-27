import {Navigate} from 'react-router-dom';

const PublicRoute: Function = ({
	                               element: Element,
	                               isAuth,
                               }: { element: JSX.Element | any, isAuth: boolean }): JSX.Element | null => {
	if (isAuth === null) return null;
	
	return !isAuth ? <Element auth={isAuth}/> : <Navigate to="/home"/>;
};

export default PublicRoute;
