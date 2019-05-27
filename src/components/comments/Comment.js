import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <section>
      <p>
        {comment}
      </p>
    </section>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
