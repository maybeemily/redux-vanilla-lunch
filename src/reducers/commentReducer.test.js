import commentReducer from './commentReducer';
import { addComment, removeComment } from '../actions/commentActions';

describe('comment reducer', () => {
  it('handles the post comment action', () => {
    const newState = commentReducer({}, addComment('1234', 'this is my comment'));
    expect(Object.values(newState['1234'])).toEqual([
      {
        'comment': 'this is my comment',
        'id': expect.any(String),
        'postId': '1234',
      }
    ]);
  });
  it('handles the delete comment action', () => {
    const state = {
      ab1234: {
        1234: 'my comment'
      },
      ab1235: {
        1235: 'my cool comment'
      }
    };

    const newState = commentReducer(state, removeComment('ab1234', '1234'));
    ///// write the dang remove comment now
    expect(newState).toEqual({
      ab1234: {
      },
      ab1235: {
        1235: 'my cool comment'
      }
    });
  });
});
