import React, { Component } from 'react';

function editDate() {  
  const currentDate = new Date();
  const currentTime = (currentDate.getDate() + '.' + (currentDate.getMonth() + 1) + '.' + currentDate.getFullYear() + ', ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds());
  return currentTime;
}

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      comment: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value
    });
  }

  handleComment() {
    const { username, comment } = this.state;
    if (this.props.onAddComment) {
      this.props.onAddComment({
        username,
        comment,
        date: editDate()
      });
    }

    this.setState({ username: '', comment: '' });
  }

  render() {
    const { username, comment } = this.state;

    return (
      <form id="new-comment" onSubmit={this.handleComment}>
        <input
          type="text"
          placeholder="Ваше имя"
          required
          value={username}
          onChange={this.handleUsernameChange}
        />
        <textarea
          placeholder="Новый комментарий"
          required
          value={comment}
          onChange={this.handleCommentChange} />
        />
        <button type="submit" id="nc-button">ОТПРАВИТЬ</button>
      </form>
    )
  }
}

export default Form;
