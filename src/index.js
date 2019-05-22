import { createStore } from 'redux';

//use array methods that return new arrays 

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: [...state.drink, action.payload] };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case 'ADD_CHIPS':
      return { ...state, chips: [...state.chips, action.payload] };
    case 'REMOVE_DRINK':
      //return { ... state, drink: [...state.drink, action.payload] };
      return  { ...state, drink: state.drink.filter(drink => { 
        return drink != action.payload; }) }; //if drink doesn't equal the payload keep it})
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: state.sandwich.filter(sandwich => { 
        return sandwich != action.payload; }) };
    case 'REMOVE_CHIPS': 
      return { ...state, chips: state.chips.filter(chips => { 
        return chips != action.payload; }) };
    case 'EMPTY_LUNCHBOX':
      return { drink: [], sandwich: [], chips: [] };
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

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'root beer'
});

console.log('drink added', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'bologna'
});

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'avocado'
});

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'pb&j'
});

console.log('sandwich added', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'sun chips'
});

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'fritos'
});

console.log('chips added', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'fritos'
});

console.log('chips removed', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'bologna'
});

console.log('sandwich removed', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'cola'
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
