import React, {FC, ReactNode, useCallback} from 'react';
import {MODALS} from "../../enums/modals";
import {useDispatch, useSelector} from "react-redux";
import {getIsModalOpen, getModalIndex} from "../../store/selectors/appSelectors";
import {Box, IconButton, Modal, SvgIcon, useTheme} from '@mui/material';
import {closeModal} from '../../store/slices/appSlice';

interface ModalManagerProps {
    type: MODALS;
    children: ReactNode;
}

const ModalManager: FC<ModalManagerProps> = ({type, children}) => {
    const isOpen = useSelector(getIsModalOpen(type))
    const modalIndex = useSelector(getModalIndex(type))

    const dispatch = useDispatch();

    const handleClose = useCallback(() => {
        dispatch(closeModal(type))
    }, [dispatch, type])
    const theme = useTheme()
    return (
        <Modal
            sx={{
                '& .MuiBackdrop-root': {
                    backdropFilter: 'blur(5px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                zIndex: (theme) => theme.zIndex.drawer + modalIndex
            }}
            open={isOpen}
            onClose={handleClose}
        >
            <>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: 30,
                        right: 30,
                        color: theme.palette.common.white
                    }} size={'small'} color={'primary'}>
                    <SvgIcon fontSize={'large'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </SvgIcon>
                </IconButton>
                <Box sx={{
                    display: 'inline-block',
                    left: '50%',
                    top: '50%',
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    background: theme.palette.common.white,
                    padding: 2,
                    borderRadius: 3,
                }}>
                    {children}
                </Box>
            </>
        </Modal>
    );
};

export default ModalManager;