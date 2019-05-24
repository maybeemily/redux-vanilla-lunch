import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/commentActions';
import uuid from 'uuid/v4';

const initialState = {};

function deleteComment(postId, commentId, state) {
  const newPostComments = { ...state[postId] };
  delete newPostComments[commentId];
  const newComments = { ...state, [postId]:newPostComments };
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
      return deleteComment(action.payload.postId, action.payload.commentId, state);
    default: 
      return state;
  }
}
