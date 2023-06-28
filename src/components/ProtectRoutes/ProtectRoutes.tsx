import React, {FC, ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {ROUTES} from '../../enums/routes';
import {useSelector} from 'react-redux';
import {getIsLogin} from '../../store/selectors/appSelectors';

const ProtectRoutes: FC<{ children: ReactNode }> = ({children}) => {
	const location = useLocation();
	const isLogin = useSelector(getIsLogin);
	console.log('as', isLogin);
	if (!isLogin) {
		return <Navigate to={ROUTES.LOGIN} state={{from: location}} replace/>;
	}
    
	return (
		<>
			{children}
		</>
	);
};

export default ProtectRoutes;