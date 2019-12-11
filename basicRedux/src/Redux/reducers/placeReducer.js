import {ADD_PLACE} from '../actions/types';

const initialState = {
  places: [], //tampung nilai berupa array
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        places: state.places.concat({
          key: Math.random(), //Math.random() => supaya key nya unik
          value: action.payload, //payload di ambil di index.js di dalam folder actions
        }),
      };
    default:
      return state;
  }
};

export default placeReducer;
