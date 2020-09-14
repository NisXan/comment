import React, { Component } from 'react';
import Comment from './comment';

class CommentList extends Component {



  constructor() {
    super();
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(index) {
    if (this.props.onDeleteComment) this.props.onDeleteComment(index);
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map((comment, index) =>
          <Comment
            key={index}
            index={index}
            comment={comment}
            onDeleteComment={this.handleDeleteComment.bind(this)} />
        )}
      </div>
    )
  }
}

export default CommentList;