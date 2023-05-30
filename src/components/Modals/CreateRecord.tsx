import {
    Box, Button,
    Chip, Collapse,
    FormControl,
    Typography,
} from '@mui/material';
import {
    DateTimePicker,
    TimePicker
} from '@mui/x-date-pickers';
import {matchIsValidTel, MuiTelInput} from 'mui-tel-input';
import React, {FC, useCallback, useEffect, useState} from 'react';
import Select from 'react-select';
import {MODALS} from '../../enums/modals';
import ModalManager from "../ModalManager/ModalManager";
import SearchInput from "../SearchInput/SearchInput";
import dayjs from "dayjs"
import {getModalData} from "../../store/selectors/appSelectors";
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from "formik";
import { addRecordsEvents } from '../../store/slices/recordsSlice';
import {closeModal} from "../../store/slices/appSlice";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Поле обовязкове'),
    phone: Yup.string().required('Поле обовязкове'),
})

const CreateRecord: FC = () => {
    const dispatch = useDispatch()
    const [isValidNumber, setIsValidNumber] = useState(false);
    const [showNumber, setShowNumber] = useState(false);
    const choiceDate = useSelector(getModalData(MODALS.CREATE_RECORD))
    const formik = useFormik({
        initialValues: {
            phone: '',
            seanceStart: dayjs(),
            seanceEnd: dayjs(),
            services: [],
            name: {
                label: '',
                value: '',
            }
        },
        onSubmit: (values) => {
            dispatch(addRecordsEvents({
                title: values.name.value,
                start: values.seanceStart.format('YYYY-MM-DD HH:mm:ss'),
                end: values.seanceEnd.format('YYYY-MM-DD HH:mm:ss'),
            }))
            dispatch(closeModal(MODALS.CREATE_RECORD))
            formik.resetForm()
        }
    })

    useEffect(() => {
        formik.setFieldValue('seanceStart', dayjs(choiceDate?.date))
        formik.setFieldValue('seanceEnd', dayjs(choiceDate?.date).add(10, 'minutes'))
    }, [choiceDate?.date])

    useEffect(() => {
        formik.setFieldValue('seanceEnd', dayjs(formik.values.seanceStart).add(10, 'minutes'))
    }, [formik.values.seanceStart])

    const handleChangeNumber = (newPhone: string) => {
        setIsValidNumber(matchIsValidTel(newPhone))
        formik.setFieldValue('phone', newPhone)
    }

    const onChange = (
        newValue: any,
        {option, action}: any
    ) => {
        switch (action) {
            case 'select-option':
                formik.setFieldValue('services', [...formik.values.services, option])
                break
            case 'remove-value':
                formik.setFieldValue('services', formik.values.services.filter((item: any) => item.value !== option.value))
                break
            case 'pop-value':
                formik.setFieldValue('services', formik.values.services.filter((item: any) => item.value !== option.value))
                break;
            case 'clear':
                formik.setFieldValue('services', [])
                break;
        }

    };

    const formatGroupLabel = useCallback((data: any) => (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span>{data.label}</span>
            <Chip size={'small'} variant={'outlined'} label={data.options.length}/>
        </Box>
    ), []);

    const services = [
        {
            label: "Posluga",
            options: [
                {
                    label: 'asdasd',
                    value: 'asds1asdasd'
                }, {
                    label: 'asdasd',
                    value: 'asdaasssdasd'
                }, {
                    label: 'asdasd',
                    value: 'asdasdsadasd'
                }, {
                    label: 'asdasd',
                    value: 'asdas121dasd'
                }, {
                    label: 'asdasd',
                    value: 'asdas122dasd'
                }
            ]
        }
    ]


    return (
        <ModalManager type={MODALS.CREATE_RECORD}>
            <Box>
                <Typography sx={{mb: 1}} variant={'h6'}>Запис користувача</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}>
                    <FormControl fullWidth>
                        <SearchInput
                            setValue={(value) => {
                                formik.setFieldValue('name', value)
                            }}
                            value={formik.values.name}
                            onCreateOption={() => {
                                setShowNumber(true)
                            }}
                            initOptions={[]}
                        />
                    </FormControl>
                    <Collapse in={showNumber}>
                        <FormControl fullWidth>
                            <MuiTelInput error={!isValidNumber} defaultCountry={'UA'} value={formik.values.phone}
                                         onChange={handleChangeNumber}/>
                        </FormControl>
                    </Collapse>
                    <FormControl fullWidth>
                        <Select
                            options={services}
                            value={formik.values.services}
                            onChange={onChange}
                            isMulti
                            isSearchable={true}
                            formatGroupLabel={formatGroupLabel}
                            placeholder={'Послуги'}
                            styles={{
                                control: (styles) => ({
                                    ...styles,
                                    padding: '7px 5px',
                                }),
                                menu: (styles) => ({
                                    ...styles,
                                    zIndex: 100
                                })
                            }}
                        />
                    </FormControl>
                    <Box sx={{
                        display: 'flex',
                        gap: 1
                    }}>
                        <DateTimePicker
                            label="Початок сеансу"
                            value={formik.values.seanceStart}
                            onChange={(newValue) => {
                                formik.setFieldValue('seanceStart', dayjs(newValue))
                            }}
                        />
                        <TimePicker
                            minTime={formik.values.seanceStart}
                            label="Кінець сеансу"
                            value={formik.values.seanceEnd}
                            onChange={(newValue) => {
                                formik.setFieldValue('seanceEnd', dayjs(newValue))
                            }}
                        />
                    </Box>
                    <Button onClick={() => formik.handleSubmit()} variant={'outlined'} sx={{p: '10px 10px'}} fullWidth>
                        Зберегти
                    </Button>
                </Box>
            </Box>
        </ModalManager>
    );
};

export default CreateRecord;