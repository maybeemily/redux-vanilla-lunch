export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment }
});

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = (postId, commentId) => ({
  type: REMOVE_COMMENT,
  payload: { postId, commentId }
});
