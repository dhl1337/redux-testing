import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form
        className="comment-box"
        onSubmit={this.handleSubmit}
      >
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

export default CommentBox;