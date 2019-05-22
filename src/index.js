import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'cola'
});

console.log('drink added', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'bologna'
});

console.log('sandwich added', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'fritos'
});

console.log('chips added', store.getState());
