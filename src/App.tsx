import React from 'react';
import {
	Routes,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {ROUTES} from './enums/routes';
import Costs from './pages/Costs';
import Records from './pages/Records';
import Services from './pages/Services';
import Visitors from './pages/Visitors';
import Register from './pages/Register';
import CodeVerification from './pages/CodeVerification';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers';
import { SnackbarProvider } from 'notistack';


function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'de'}>
			<SnackbarProvider maxSnack={3}>
				<BrowserRouter>
					<Routes>
						<Route path={ROUTES.LOGIN} element={<Login/>}/>
						<Route path={ROUTES.REGISTER} element={<Register/>}/>
						<Route path={ROUTES.CODE_VERIFICATION} element={<CodeVerification/>}/>

						<Route element={<Layout/>}>
							<Route path={ROUTES.HOME} element={<Home/>}/>
							<Route path={ROUTES.COSTS} element={<Costs/>}/>
							<Route path={ROUTES.RECORDS} element={<Records/>}/>
							<Route path={ROUTES.SERVICES} element={<Services/>}/>
							<Route path={ROUTES.VISITORS} element={<Visitors/>}/>
						</Route>
					</Routes>
				</BrowserRouter>
			</SnackbarProvider>
		</LocalizationProvider>
	);
}

export default App;
