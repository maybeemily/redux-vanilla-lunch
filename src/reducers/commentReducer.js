import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/commentActions';
import uuid from 'uuid/v4';
import { REMOVE_POST } from '../actions/postActions';

const initialState = {};

function deleteComment(postId, commentId, state) {
  const newPostComments = { ...state[postId] };
  delete newPostComments[commentId];
  const newComments = { ...state, [postId]:newPostComments };
  return newComments;
}

const deleteAllComments = (postId, state) => {
  const newState = { ...state[postId] };
  delete newState[postId];
  return newState;
};

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
      
    case REMOVE_POST:
      return deleteAllComments(action.payload.postId, state);
    default: 
      return state;
  }
}
