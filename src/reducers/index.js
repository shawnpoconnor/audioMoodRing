import {combineReducers} from 'redux';
import words from './words';
import notes from './notes';

export default combineReducers({
    words,
    notes,
});
