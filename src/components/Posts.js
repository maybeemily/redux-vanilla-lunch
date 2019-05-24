import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const postList = posts.map(post => (
    <li key={post.id}>
      <Post post={post}/>
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
  })).isRequired
};

export default Posts;
