import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets a list of posts', () => {
    const state = {
      posts: {
        1234: {
          title: 'cool title',
          body: 'cool body',
          id: 1234
        },
        1235: {
          title: 'cool title2',
          body: 'cool body',
          id: 1235
        },
        1236: {
          title: 'cool title3',
          body: 'cool body',
          id: 1236
        }
      }
    };
    expect(getPosts(state)).toEqual([
      {
        title: 'cool title',
        body: 'cool body',
        id: 1234
      },
      {
        title: 'cool title2',
        body: 'cool body',
        id: 1235
      },
      {
        title: 'cool title3',
        body: 'cool body',
        id: 1236
      }
    ]);
  });

  it('gets post by id', () => {
    const state = {
      posts: {
        1234: {
          title: 'cool title',
          body: 'cool body'
        },
        1235: {
          title: 'cool title2',
          body: 'cool body'
        },
        1236: {
          title: 'cool title3',
          body: 'cool body'
        }
      }
    };
    expect(getPost(state, 1234)).toEqual({
      title: 'cool title',
      body: 'cool body'
    });
  });

});
