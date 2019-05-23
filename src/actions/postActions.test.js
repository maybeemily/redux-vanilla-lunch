import { addPost, ADD_POST } from './postActions';

describe('post actions', () => {
  it('creates a post with a title and body', () => {
    expect(addPost({ title: 'title', body: 'body' })).toEqual({
      type: ADD_POST,
      payload: { title: 'title', body: 'body' }
    });
  });
});
