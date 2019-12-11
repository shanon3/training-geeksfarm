import {INCREMENT, DECREMENT, ADD_PLACE} from './types';

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export const addPlace = placeName => {  //diambil di ReduxSavePlaces
  return {
    type: ADD_PLACE,
    payload: placeName,
  };
};
