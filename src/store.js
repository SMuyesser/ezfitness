import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import workoutReducer from './reducers/index';

export default createStore(workoutReducer, applyMiddleware(thunk));

