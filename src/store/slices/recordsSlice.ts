import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface Record {
    title: string,
    start: string,
    end: string,
}

export interface RecordsSliceState {
    records: Record[];
}

const initialState: RecordsSliceState = {
	records: []
};

const recordsSlice = createSlice({
	name: 'records',
	initialState,
	reducers: {
		addRecordsEvents: (state, action: PayloadAction<Record>) => {
			state.records.push(action.payload);
		},
		setRecordsEvents: (state, action: PayloadAction<Record[]>) => {
			state.records = action.payload;
		}
	}
});

export const {addRecordsEvents, setRecordsEvents} = recordsSlice.actions;

export default recordsSlice.reducer;