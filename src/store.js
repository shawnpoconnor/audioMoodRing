import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const initialState = {};

const baseMiddleware = [thunk, apiMiddleware];

const enhancer =
    process.env.NODE_ENV === 'production'
    ? applyMiddleware(...baseMiddleware)
    : composeWithDevTools(
        applyMiddleware(
            ...baseMiddleware,
            logger
        )
    );

export default createStore(
    reducer,
    initialState,
    enhancer,
);
