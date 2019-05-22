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
  }
}

const store = createStore();
console.log(store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'cola'
});

console.log('drink added', store.getState());
