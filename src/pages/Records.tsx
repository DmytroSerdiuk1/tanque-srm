import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../store/slices/appSlice";
import {MODALS} from "../enums/modals";
import CreateRecord from "../components/Modals/CreateRecord";
import {getRecords} from "../store/selectors/recordsSelectors";

const Records = () => {
    const dispatch = useDispatch()
    const records = useSelector(getRecords)
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
                    alert('dsaadsasd')
                }}
                eventClick={() => {
                    alert('dsaadsasd')
                }}
                dateClick={(info) => {
                    dispatch(openModal({type: MODALS.CREATE_RECORD, data: info}))
                }}
                height={'94vh'}
                locale={'uk'}
                locales={[{
                    code: 'uk',
                    buttonText: {
                        week: 'Тиждень',
                        day: 'День',
                        list: 'Список',
                        month: 'Місяць',
                        today: 'Cьогодні',
                    },
                    allDayText: "Увесь день",
                    noEventsText: "На сьогодні записи відсутні"
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