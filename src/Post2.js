import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteEvent } from './actions/postActions';
class Post2 extends Component {
  render() {
    return (
      <div className='post'>
        <h2 className='post_title'>{this.props.post.event_date}</h2>
        <p className='post_message'>{this.props.post.event_time}</p>
        <p className='post_message'>{this.props.post.description}</p>
        <p className='post_message'>{this.props.post.attendies}</p>
        <div className='control-buttons'>
          <button
            className='delete'
            onClick={() => this.props.deleteEvent(this.props.post)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteEvent: deleteEvent
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(Post2);
