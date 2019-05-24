import { createStore } from 'redux';
import { addPost, removePost } from './actions/postActions';
import reducer from './reducers';
import { addComment } from './actions/commentActions';
//cannot mutate the original state. always need to hand it a new state

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addPost('cool blog post', 'this is a body'));
store.dispatch(addPost('another blog post', 'my body my body'));
console.log('post added', store.getState());

// const id = Object.keys(store.getState().posts)[0];
// console.log(Object.values(id));
// store.dispatch(addComment(id, 'my comment'));

console.log('comment added', store.getState());
// store.dispatch(removePost(id));
// console.log('post removed', store.getState());
