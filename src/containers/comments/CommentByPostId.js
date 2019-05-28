import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentSelectors';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});


export default connect(
  mapStateToProps,
  null
)(Comments);
