import React, {Suspense} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Outlet} from 'react-router-dom';
import {Box, CircularProgress} from '@mui/material';
import ProtectRoutes from '../ProtectRoutes/ProtectRoutes';

const Layout = () => {
	return (
		<ProtectRoutes>
			<Sidebar/>
			<Box sx={{
				padding: '20px',
				maxHeight: '100vh',
				paddingLeft: '320px'
			}}>
				<Suspense fallback={
					<Box sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<CircularProgress/>
					</Box>
				}><Outlet/></Suspense>
			</Box>
		</ProtectRoutes>
	);
};

export default Layout;