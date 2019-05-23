import { addPost, ADD_POST, removePost, REMOVE_POST } from './postActions';

describe('post actions', () => {
  it('creates a post with a title and body', () => {
    expect(addPost({ title: 'title', body: 'body' })).toEqual({
      type: ADD_POST,
      payload: { title: 'title', body: 'body' }
    });
  });
  it('removes a post', () => {
    expect(removePost({ title: 'title', body: 'body' })).toEqual({
      type: REMOVE_POST,
      payload: { title: 'title', body: 'body' }
    });
  });
});
