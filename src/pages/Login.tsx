import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {login} from '../store/slices/appSlice';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '../enums/routes';

const Login = () => {
	const dispatch = useDispatch();
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
			<Button onClick={() => {
				navigate(ROUTES.CODE_VERIFICATION);
			}} fullWidth size={'large'} variant={'contained'}>Login</Button>
		</Box>
	);
};

export default Login;