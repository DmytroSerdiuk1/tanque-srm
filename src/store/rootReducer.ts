import appReducer from './slices/appSlice';
import recordsSlice from './slices/recordsSlice';

export const rootReducer = {
	app: appReducer,
	records: recordsSlice
};