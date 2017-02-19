import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <textarea></textarea>
        <button>Submit Comment</button>
      </div>
    );
  }
}

export default CommentBox;