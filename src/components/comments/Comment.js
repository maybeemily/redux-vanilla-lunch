import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment, id, deleteComment }) {
  return (
    <section>
      <p>
        {comment}
      </p>
      <button onClick = {deleteComment.bind(null, id)}>Delete Comment</button>
    </section>
  );
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;
