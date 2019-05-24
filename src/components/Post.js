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
    id: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Post;
