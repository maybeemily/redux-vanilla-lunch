import { ADD_POST, REMOVE_POST } from '../actions/postActions';
import uuid from 'uuid/v4';


const initialState = {};

function removePost(id, state) {
  const newPosts = { ...state };
  delete newPosts[id];
  return newPosts;
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, [uuid()]: action.payload }; //adding a uuid when the post is created
    case REMOVE_POST:
      //removing by id - which is the payload here since thats what we pass to the function - and the post, which is retrieved by the state
      return removePost(action.payload, state); 
    default:
      return state;
  }
}
