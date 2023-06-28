import { RootState } from '../store';
import {MODALS} from '../../enums/modals';

export const getIsModalOpen = (modal: MODALS) => (state: RootState): boolean => !!state.app.openModals.find(item => item === modal);
export const getModalIndex = (modal: MODALS) => (state: RootState): number => state.app.openModals.findIndex(item => item === modal);
export const getModalData = (modal: MODALS) => (state: RootState): any => state.app.modalsData.get(modal);
export const getIsLogin = (state: RootState): boolean => state.app.isLogin;