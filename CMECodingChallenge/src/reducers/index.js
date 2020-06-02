import {combineReducers} from 'redux';

const counterReducer = (counter = 0, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return counter + action.payload.counter;
    default:
      return counter;
  }
};

export default combineReducers({
  counter: counterReducer,
});
