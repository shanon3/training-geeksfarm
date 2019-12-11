import {combineReducers} from 'redux';
import countReducer from './countReducers';
import placeReducer from './placeReducer';
import cityReducer from './cityReducers';

const allReducers = combineReducers({
  count: countReducer,
  listTempat: placeReducer,
  listCity: cityReducer,
});

export default allReducers;
