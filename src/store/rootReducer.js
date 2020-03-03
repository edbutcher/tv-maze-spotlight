import { combineReducers } from 'redux';
import show from 'core/Show/reducers';
import episodes from 'core/Episodes/reducers';

export default combineReducers({ show, episodes });
