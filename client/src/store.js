import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState = {};
const client = axios.create({
  responseType: 'json'
});

const baseMiddleware = [thunk, axiosMiddleware(client)];

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(...baseMiddleware)
}

else {
    const {composeWithDevTools} = require('redux-devtools-extension');
    const logger = require('redux-logger').default;

    enhancer = composeWithDevTools(
        applyMiddleware(
            ...baseMiddleware,
            logger
        )
    );
}

export default createStore(
    reducer,
    initialState,
    enhancer,
);
