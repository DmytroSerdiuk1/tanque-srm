import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store/store';
import 'dayjs/locale/de';

import './translations';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
	<Suspense fallback={'Loading...'}>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App/>
			</Provider>
		</ThemeProvider>
	</Suspense>
);

