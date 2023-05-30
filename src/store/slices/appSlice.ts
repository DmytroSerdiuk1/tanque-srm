import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MODALS} from "../../enums/modals";

export interface AppSliceState {
    openModals: MODALS[],
    modalsData: Map<MODALS, any>
}

const initialState: AppSliceState = {
    openModals: [],
    modalsData: new Map()
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{
            type: MODALS,
            data: any
        }>) => {
            state.openModals.push(action.payload.type)
            state.modalsData.set(action.payload.type, action.payload.data)
        },
        closeModal: (state, action) => {
            state.openModals = state.openModals.filter(modal => modal !== action.payload)
        }
    }
})

export const { openModal, closeModal } = appSlice.actions

export default appSlice.reducer