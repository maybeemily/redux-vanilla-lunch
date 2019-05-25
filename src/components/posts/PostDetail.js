import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
