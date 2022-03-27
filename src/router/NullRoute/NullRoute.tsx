import {Navigate} from 'react-router-dom';

const NullRoute: Function = ({isAuth}: { isAuth: boolean }): JSX.Element | null => {
	if (isAuth === null) return null;
	
	return isAuth ? <Navigate to="/home"/> : <Navigate to="/login"/>;
};

export default NullRoute;
