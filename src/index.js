import { createStore } from 'redux';
import { ADD_POST, addPost } from './actions/postActions';

const initialState = {
  post: {
    title: null,
    body: null
  }
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
}


const store = createStore(reducer);

store.dispatch(addPost({ title: 'cool blog post', body: 'this is a body' }));
