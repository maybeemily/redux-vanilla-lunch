export const ADD_POST = 'ADD_POST';
export const addPost = (title, body) => ({
  type: ADD_POST,
  payload: { title, body }
});

export const REMOVE_POST = 'REMOVE_POST';
export const removePost = postId => ({
  type: REMOVE_POST,
  payload: postId
});

// export const UPDATE_POST = 'UPDATE_POST';
// export const updatePost = (postId, postUpdate) => ({
//   type: UPDATE_POST,
//   payload: { postId, postUpdate }
// });
