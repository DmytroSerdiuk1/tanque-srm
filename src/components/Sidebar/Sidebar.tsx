import React, {useCallback} from 'react';
import {
	Drawer,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	MenuItem,
	Select,
	styled,
	SvgIcon
} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import {ROUTES} from '../../enums/routes';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {logout} from '../../store/slices/appSlice';

const StyledListItemButton = styled(ListItemButton)(({theme}) => ({
	borderRadius: '7px',
	margin: '0 5px',

	'.Mui-selected': {
		background: '#000'
	}
}));

const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {pathname} = useLocation();
	const {t, i18n} = useTranslation();

	const handleChangeLanguage = useCallback((value: string) => {
		i18n.changeLanguage(value);
	}, []);

	return (
		<Drawer sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} open={true}
			anchor={'left'} variant={'persistent'}>
			<List
				sx={{
					width: 300,
				}}
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader sx={{padding: '5px 5px 10px 5px', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} component="div" id="nested-list-subheader">
						<span>
                            Nomid SRM Panel
						</span>
						<Select
							labelId="demo-select-small-label"
							id="demo-select-small"
							value={i18n.resolvedLanguage}
							size={'small'}
							onChange={(e) => handleChangeLanguage(e.target.value)}
						>
							<MenuItem value={'en'}>EN</MenuItem>
							<MenuItem value={'uk'}>УКР</MenuItem>
						</Select>
					</ListSubheader>
				}
			>
				<StyledListItemButton selected={ROUTES.HOME === pathname} onClick={() => navigate(ROUTES.HOME)}>
					<ListItemIcon>
						<SvgIcon fontSize={'medium'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							fill="currentColor">
							<path
								d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
							<path
								d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
						</SvgIcon>
					</ListItemIcon>
					<ListItemText primary={t('navigation:home')}/>
				</StyledListItemButton>
				<StyledListItemButton selected={ROUTES.VISITORS === pathname} onClick={() => navigate(ROUTES.VISITORS)}>
					<ListItemIcon>
						<SvgIcon fontSize={'medium'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							fill="currentColor">
							<path fillRule="evenodd"
								d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
								clipRule="evenodd"/>
							<path
								d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"/>
						</SvgIcon>
					</ListItemIcon>
					<ListItemText primary={t('navigation:visitors')}/>
				</StyledListItemButton>
				<StyledListItemButton selected={ROUTES.RECORDS === pathname} onClick={() => navigate(ROUTES.RECORDS)}>
					<ListItemIcon>
						<SvgIcon fontSize={'medium'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							fill="currentColor" className="w-6 h-6">
							<path
								d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
							<path fillRule="evenodd"
								d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
								clipRule="evenodd"/>
						</SvgIcon>
					</ListItemIcon>
					<ListItemText primary={t('navigation:schedules')}/>
				</StyledListItemButton>
				<StyledListItemButton selected={ROUTES.COSTS === pathname} onClick={() => navigate(ROUTES.COSTS)}>
					<ListItemIcon>
						<SvgIcon fontSize={'medium'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							fill="currentColor" className="w-6 h-6">
							<path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"/>
							<path fillRule="evenodd"
								d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
								clipRule="evenodd"/>
							<path
								d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"/>
						</SvgIcon>
					</ListItemIcon>
					<ListItemText primary={t('navigation:cost')}/>
				</StyledListItemButton>
				<StyledListItemButton selected={ROUTES.SERVICES === pathname} onClick={() => navigate(ROUTES.SERVICES)}>
					<ListItemIcon>
						<SvgIcon fontSize={'medium'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							fill="currentColor" className="w-6 h-6">
							<path fillRule="evenodd"
								d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
								clipRule="evenodd"/>
							<path fillRule="evenodd"
								d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
								clipRule="evenodd"/>
						</SvgIcon>
					</ListItemIcon>
					<ListItemText primary={t('navigation:services')}/>
				</StyledListItemButton>
			</List>
			<List>
				<StyledListItemButton onClick={() => dispatch(logout())}>
					<ListItemIcon>
						<SvgIcon fontSize={'medium'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
							<path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
						</SvgIcon>
					</ListItemIcon>
					<ListItemText primary={t('auth:logout')}/>
				</StyledListItemButton>
			</List>
		</Drawer>
	);
};

export default Sidebar;