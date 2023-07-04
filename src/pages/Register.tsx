import React, {FC} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {ROUTES} from '../enums/routes';
import {useNavigate} from 'react-router-dom';

const Register: FC = () => {
	const navigate = useNavigate();
	return (
		<Box sx={{
			width: 400,
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			gap: 2,
			justifyContent: 'center',
			alignItems: 'center',
			m: '0 auto'
		}}>
			<TextField fullWidth label="Email" variant="outlined"/>
			<TextField fullWidth type={'password'} label="Password" variant="outlined"/>
			<TextField fullWidth type={'password'} label="Password" variant="outlined"/>
			<Button onClick={() => {
				navigate(ROUTES.CODE_VERIFICATION);
			}} fullWidth size={'large'} variant={'contained'}>Register</Button>
		</Box>
	);
};

export default Register;