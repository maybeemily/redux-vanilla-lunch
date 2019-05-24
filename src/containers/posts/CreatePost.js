import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';
import PostForm from '../../components/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(addPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
