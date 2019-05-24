import { ADD_COMMENT } from '../actions/commentActions';
import uuid from 'uuid/v4';

const initialState = {};

// posts: {
//  adbidaklvjdakfjdlkanlkd: {
//    title: 'my title',
//    body: 'cool body'
// }
//}

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return { ...state, [action.payload.postId]: {
        ...(state[action.payload.postId] || {}),
        [uuid()]: action.payload.comment 
      }
      };
    default: 
      return state;
  }
}
