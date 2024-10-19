import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { didntreadApi } from '@/services/didntread';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
    [didntreadApi.reducerPath]: didntreadApi.reducer,
});

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(didntreadApi.middleware),
});
