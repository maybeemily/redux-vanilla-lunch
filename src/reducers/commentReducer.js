import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/commentActions';
import uuid from 'uuid/v4';

const initialState = {};

function deleteComment(id, comments) {
  const newComments = { ...comments };
  delete newComments[id];
  return newComments;
}


export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return { ...state, [action.payload.postId]: {
        ...(state[action.payload.postId] || {}),
        [uuid()]: action.payload.comment 
      }
      };
    case REMOVE_COMMENT:
      return { ...state, comments: deleteComment(action.payload, state.comments) };
    default: 
      return state;
  }
}
