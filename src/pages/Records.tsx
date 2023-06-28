import React, {useEffect} from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {useDispatch, useSelector} from 'react-redux';


import {openModal} from '../store/slices/appSlice';
import {MODALS} from '../enums/modals';
import CreateRecord from '../components/Modals/CreateRecord';
import {getRecords} from '../store/selectors/recordsSelectors';
import {useTranslation} from 'react-i18next';
import {useSnackbar} from 'notistack';
import {Button} from '@mui/material';

const Records = () => {
	const dispatch = useDispatch();
	const records = useSelector(getRecords);
	const {t, i18n} = useTranslation();
	const {enqueueSnackbar} = useSnackbar();

	useEffect(() => {
		enqueueSnackbar(t('records:didNotConnectCalendar'), {
			variant: 'warning',
			action: () => {
				return <Button color={'inherit'}>{t('records:connect')}</Button>;
			}
		});
	}, [enqueueSnackbar, t]);

	return (
		<div>
			<CreateRecord/>
			<FullCalendar
				headerToolbar={{
					left: 'prev,next today listMonth',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				}}
				events={records}
				eventAdd={() => {
					alert('dsaadsasd');
				}}
				eventClick={() => {
					alert('dsaadsasd');
				}}
				dateClick={(info) => {
					dispatch(openModal({type: MODALS.CREATE_RECORD, data: info}));
				}}
				height={'94vh'}
				locale={i18n.language}
				locales={[{
					code: 'uk',
					buttonText: {
						week: 'Тиждень',
						day: 'День',
						list: 'Список',
						month: 'Місяць',
						today: 'Cьогодні',
					},
					allDayText: 'Увесь день',
					noEventsText: 'На сьогодні записи відсутні'
				}, {
					code: 'en',
					buttonText: {
						week: 'Week',
						day: 'Day',
						list: 'List',
						month: 'Month',
						today: 'Today',
					},
					allDayText: 'All day',
					noEventsText: 'No records for today'
				}]}
				plugins={[
					dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin
				]}
				droppable
			/>
		</div>
	);
};

export default Records;