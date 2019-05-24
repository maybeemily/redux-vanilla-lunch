import { createStore } from 'redux';
import { addPost, removePost } from './actions/postActions';
import postReducer from './reducers/postReducer';
//cannot mutate the original state. always need to hand it a new state

const store = createStore(
  postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addPost('cool blog post', 'this is a body'));
store.dispatch(addPost('another blog post', 'my body my body'));
console.log('post added', store.getState());

const id = Object.keys(store.getState().posts)[1];
store.dispatch(removePost(id));
console.log('post removed', store.getState());
