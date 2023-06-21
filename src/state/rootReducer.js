import { combineReducers } from 'redux';
import authReducer from './features/auth/authSlice';
import { authApi } from './features/auth/authService';

const rootReducer = combineReducers({
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;