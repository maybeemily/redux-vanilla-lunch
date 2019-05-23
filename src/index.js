import { createStore } from 'redux';
import { ADD_POST, addPost, REMOVE_POST, removePost } from './actions/postActions';
//cannot mutate the original state. always need to hand it a new state

const initialState = {
  posts: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, post: [...state.posts, action.payload] };
      //need to revisit this. need to remove post by id. make uuid? 
    case REMOVE_POST:
      return { ...state, post:  [...state.posts.slice(0, action.payload), ...state.posts.slice(action.payload + 1)] };
    default:
      return state;
  }
}


const store = createStore(reducer);

store.dispatch(addPost({ title: 'cool blog post', body: 'this is a body' }));
store.dispatch(addPost({ title: 'another blog post', body: 'my body my body' }));
console.log('post added', store.getState());

store.dispatch(removePost({ title: 'cool blog post', body: 'this is a body' }));
console.log('post removed', store.getState());
