import React, { Component } from 'react';
import CommentList from './commentListContainer';
import Form from './formContainer';

class CommentApp extends Component {
  render() {
    return (
      <div>        
        <CommentList />
        <Form />
      </div>
    )
  }
}

export default CommentApp;
