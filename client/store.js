import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';

const defaultState = {
    
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browerHistory, store);

export default store;