import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/form';
import { addComment } from '../actions/index';

const COMMENTS = 'react-redux-comments';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  saveComments(comments) {
    localStorage.setItem(COMMENTS, JSON.stringify(comments));
  }


  handleAddComment(comment) {
    if (this.props.onAddComment) {
      this.props.onAddComment(comment);
    }
    const { comments } = this.props;
    comments.push(comment);
    this.saveComments(comments);
  }

  render() {
    return(
      <Form
        username={this.state.username}
        onAddComment={this.handleAddComment} />
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddComment: comment => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
