import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homeReducer from './containers/Home/reducers';

const rootReducer = combineReducers({homeReducer, 
  routing: routerReducer});

export default rootReducer;