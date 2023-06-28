import { Button, TableContainer} from '@mui/material';
import React, {lazy} from 'react';
import {useTranslation} from 'react-i18next';

const Table = lazy(() => import('@mui/material/Table'));
const TableCell = lazy(() => import('@mui/material/TableCell'));
const TableBody = lazy(() => import('@mui/material/TableBody'));
const TableHead = lazy(() => import('@mui/material/TableHead'));
const TableRow = lazy(() => import('@mui/material/TableRow'));
const Paper = lazy(() => import('@mui/material/Paper'));

function createData(
	name: string,
	number: string,
	cost: number,
	lastMeet: string,
) {
	return { name, number, cost,lastMeet };
}

const rows = [
	createData('Dmitriy', '0982304120', 3320, '12-05-23'),
	createData('John', '0982304120', 110, '12-05-23'),
	createData('Joe', '0982304120', 2230, '12-05-23'),
	createData('Karina', '0982304120', 230, '12-05-23'),
	createData('Lilia', '0982304120', 520, '12-05-23'),
	createData('Lilia2', '0982304120', 520, '12-05-23'),
	createData('Lilia3', '0982304120', 520, '12-05-23'),
	createData('Lilia4', '0982304120', 520, '12-05-23'),
	createData('Lilia5', '0982304120', 520, '12-05-23'),
	createData('Lilia6', '0982304120', 520, '12-05-23'),
	createData('Lilia7', '0982304120', 520, '12-05-23'),
	createData('Lilia76', '0982304120', 520, '12-05-23'),
	createData('Lilia77', '0982304120', 520, '12-05-23'),
	createData('Lilia78', '0982304120', 520, '12-05-23'),
	createData('Lilia8', '0982304120', 520, '12-05-23'),
];

const Visitors = () => {
	const {t} = useTranslation();
	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>{t('visitor:visitorName')}</TableCell>
							<TableCell>{t('visitor:visitorNumber')}</TableCell>
							<TableCell>{t('visitor:cost')}</TableCell>
							<TableCell>{t('visitor:lastMeet')}</TableCell>
							<TableCell/>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									<b>{row.name}</b>
								</TableCell>
								<TableCell>{row.number}</TableCell>
								<TableCell>{row.cost}</TableCell>
								<TableCell>{row.lastMeet}</TableCell>
								<TableCell>
									<Button size={'small'} variant={'contained'}>
										{t('visitor:more')}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Visitors;