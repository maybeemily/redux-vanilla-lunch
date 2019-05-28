export const getComments = (state, postId) => {
  console.log(postId);
  Object.values(state.comments[postId]
  );

};
