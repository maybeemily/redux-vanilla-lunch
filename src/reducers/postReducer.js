import { ADD_POST, REMOVE_POST } from '../actions/postActions';
import uuid from 'uuid/v4';


const initialState = {};

function removePost(id, posts) {
  const newPosts = { ...posts };
  delete newPosts[id];
  return newPosts;
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, posts: { ...state.posts, [uuid()]: action.payload } }; //adding a uuid when the post is created
    case REMOVE_POST:
      //removing by id - which is the payload here since thats what we pass to the function - and the post, which is retrieved by the state
      return { ...state, posts: removePost(action.payload, state.posts) }; 
    default:
      return state;
  }
}
