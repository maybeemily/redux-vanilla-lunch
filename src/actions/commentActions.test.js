import { addComment, ADD_COMMENT, removeComment, REMOVE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates a comment', () => {
    expect(addComment('1234ab', 'my cool comment')).toEqual({
      type: ADD_COMMENT,
      payload: { postId: '1234ab', comment: 'my cool comment' }
    });
  });
  it('removes a post', () => {
    expect(removeComment('1234ab', '3446cd')).toEqual({
      type: REMOVE_COMMENT,
      payload: { postId: '1234ab', commentId: '3446cd' }
    });
  });
});
