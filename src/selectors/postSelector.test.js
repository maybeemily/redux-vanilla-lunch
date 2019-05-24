import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets a list of posts', () => {
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
    expect(getPosts(state)).toEqual({
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
    });
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
