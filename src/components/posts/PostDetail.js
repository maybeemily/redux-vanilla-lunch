import React from 'react';
import PropTypes from 'prop-types';
import CommentByPostId from '../../containers/comments/CommentByPostId';
import CreateComment from '../../containers/comments/CreateComment';

function PostDetail({ post }) {
  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <CommentByPostId postId={post.id}/>
      <CreateComment postId={post.id}/>
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
