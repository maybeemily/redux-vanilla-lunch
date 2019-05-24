import { getComments } from './commentSelectors';

describe('comment selectors', () => {
  it('gets a list of comments by post id', () => {
    const state = {
      comments: {
        1234: {
          abcd: 'cool comment'
        },
        1235: {
          bb3a: 'another cool comment',
          er34: 'cool commmmments'
        },
        1236: {
          ww3d: 'commmennnts'
        }
      }
    };
    expect(getComments(state, 1235)).toEqual({
      bb3a: 'another cool comment',
      er34: 'cool commmmments'
    });
  });
});
