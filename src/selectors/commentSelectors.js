export const getComments = (state, postId) => {
  if(state.comments[postId] !== undefined) {
    return Object.values(state.comments[postId]);
  }
  else return [];
};
