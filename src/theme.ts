import { createTheme } from '@mui/material';

export const theme = createTheme({
	components: {
		MuiDrawer: {
			styleOverrides: {
				paper: {
					borderRadius: '10px',
				},
			}
		}
	}
});