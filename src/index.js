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
    case 'REMOVE_DRINK':
      return { ... state, drink: null };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'REMOVE_CHIPS': 
      return { ...state, chips: null };
    case 'EMPTY_LUNCHBOX':
      return { drink: null, sandwich: null, chips: null };
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

store.dispatch({
  type: 'REMOVE_CHIPS'
});

console.log('chips removed', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH'
});

console.log('sandwich removed', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK'
});

console.log('drink removed', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'pringles'
});

console.log('added chips again', store.getState());

store.dispatch({
  type: 'EMPTY_LUNCHBOX'
});

console.log('empty lunchbox', store.getState());
