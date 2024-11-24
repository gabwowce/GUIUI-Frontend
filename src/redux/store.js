import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import authReducer from './authReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    navigation: navigationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;