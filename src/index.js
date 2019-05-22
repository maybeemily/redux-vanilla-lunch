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
