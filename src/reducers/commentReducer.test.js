import commentReducer from './commentReducer';
import { addComment } from '../actions/commentActions';

describe('comment reducer', () => {
  it('handles the post comment action', () => {
    const newState = commentReducer({}, addComment('1234', 'this is my comment'));
    expect(Object.values(newState['1234'])).toEqual([
      'this is my comment'
    ]);
  });
});
