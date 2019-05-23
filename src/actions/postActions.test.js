import { addPost, ADD_POST, removePost, REMOVE_POST } from './postActions';

describe('post actions', () => {
  it('creates a post with a title and body', () => {
    expect(addPost('title', 'body')).toEqual({
      type: ADD_POST,
      payload: { title: 'title', body: 'body' }
    });
  });
  it('removes a post', () => {
    expect(removePost(2)).toEqual({
      type: REMOVE_POST,
      payload: 2
    });
  });
});
