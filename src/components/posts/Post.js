import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <>
    <p>{post.title}</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
