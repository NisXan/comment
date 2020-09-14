import React, { Component } from 'react';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentDate: ''
    }

    this.handleDeleteComment =  this.handleDeleteComment.bind(this);  
  }
  
  componentWillMount() {
    this.updateCommentTime();
    this.timer = setInterval(this.updateCommentTime.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateCommentTime() {
    const { date } = this.props.comment;
    
    this.setState({
      commentDate: date
    });
  }

  handleDeleteComment() {
    if (!this.props.onDeleteComment) return false;

    const index = this.props.index;
    this.props.onDeleteComment(index);
  }

  render() {
    const { username, comment } = this.props.comment;
    return (
      <div className="comment" data-key={this.props.index}>
        <div className="comment-name">{username}</div>
        <div className="comment-text">{comment}</div>
        <div className="comment-date">{this.state.commentDate}</div>
        <div className="comment-delete"
          onClick={this.handleDeleteComment}
        >X</div>
      </div>
    )
  }
}

export default Comment;