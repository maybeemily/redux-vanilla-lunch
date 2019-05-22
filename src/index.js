import { createStore } from 'redux';
import { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_CHIPS, EMPTY_LUNCHBOX, addDrink, addSandwich, addChips, removeChips, removeSandwich, removeDrink, emptyLunchbox } from './actions/lunchActions';


//use array methods that return new arrays 

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, action.payload] };
    case ADD_SANDWICH:
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case ADD_CHIPS:
      return { ...state, chips: [...state.chips, action.payload] };
    case REMOVE_DRINK:
      //return { ... state, drink: [...state.drink, action.payload] };
      return  { ...state, drink: state.drink.filter(drink => { 
        return drink != action.payload; }) }; //if drink doesn't equal the payload keep it})
    case REMOVE_SANDWICH:
      return { ...state, sandwich: state.sandwich.filter(sandwich => { 
        return sandwich != action.payload; }) };
    case REMOVE_CHIPS: 
      return { ...state, chips: state.chips.filter(chips => { 
        return chips != action.payload; }) };
    case EMPTY_LUNCHBOX:
      return { drink: [], sandwich: [], chips: [] };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

store.dispatch(addDrink('cola'));

store.dispatch(addDrink('root beer'));

console.log('drink added', store.getState());

store.dispatch(addSandwich('bologna'));

store.dispatch(addSandwich('avocado'));

store.dispatch(addSandwich('pb&j'));

console.log('sandwich added', store.getState());

store.dispatch(addChips('fritos'));

store.dispatch(addChips('sun chips'));

console.log('chips added', store.getState());

store.dispatch(removeChips('fritos'));

console.log('chips removed', store.getState());

store.dispatch(removeSandwich('avocado'));

console.log('sandwich removed', store.getState());

store.dispatch(removeDrink('root beer'));

console.log('drink removed', store.getState());

store.dispatch(addChips('pringles'));

console.log('added chips again', store.getState());

store.dispatch(emptyLunchbox());

console.log('empty lunchbox', store.getState());
