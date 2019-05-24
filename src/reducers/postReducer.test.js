import postReducer from './postReducer';
import { addPost, removePost } from '../actions/postActions';


describe('post reducer test', () => {
  it('handles the post action', () => {
    const initialState = {};
    const newState = postReducer(initialState, addPost('post title', 'post body'));
    expect(Object.values(newState.posts)).toEqual([
      { title:'post title', body: 'post body' }
    ]);
  });

  it('handles the remove post action', () => {
    const state = {
      posts: {
        1234: {
          title: 'my cool post',
          body: 'my cool body'
        },
        1235: {
          title: 'my cooler post',
          body: 'my cooler body'
        }
      }
    };
    const newState = postReducer(state, removePost(1234, state.posts));
    expect(newState).toEqual({
      posts: {
        1235: {
          title: 'my cooler post',
          body: 'my cooler body'
        }
      }
    });
  });
});
