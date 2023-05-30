import React, {FC, ReactNode} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {ROUTES} from "../../enums/routes";

const ProtectRoutes: FC<{children: ReactNode}> = ({children}) => {
    let location = useLocation();

    if (false) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default ProtectRoutes;