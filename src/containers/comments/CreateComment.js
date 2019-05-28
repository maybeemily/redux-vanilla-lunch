import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';
import CommentForm from '../../components/comments/CommentForm';
import { getComments } from '../../selectors/commentSelectors';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});


const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(addComment(props.postId, comment));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
