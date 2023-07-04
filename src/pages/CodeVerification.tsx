import React from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {login} from '../store/slices/appSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '../enums/routes';

const CodeVerification = () => {
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
			<Typography variant={'h5'}>Verify it&lsquo;s you</Typography>
			<TextField autoComplete={'one-time-code'} inputMode={'numeric'} fullWidth label="Code" variant="outlined"/>
			<Button onClick={() => {
				dispatch(login());
				navigate(ROUTES.HOME);
			}} fullWidth size={'large'} variant={'contained'}>Verify
			</Button>
			<Typography variant={'body2'}>Didn&lsquo;t get an code? <span color={'blue'}>Resend</span></Typography>
		</Box>
	);
};

export default CodeVerification;