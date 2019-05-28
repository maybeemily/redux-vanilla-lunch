export const getPosts = state => Object.values(state.posts);


export const getPost = (state, postId) => state.posts[postId];
