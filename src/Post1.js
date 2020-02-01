import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteEvent, editEvent } from './actions/postActions';

class Post1 extends Component {
  render() {
    return (
      <div className='post'>
        <h2 className='post_title'>{this.props.post.event_date}</h2>
        <p className='post_message'>{this.props.post.event_time}</p>
        <p className='post_message'>{this.props.post.description}</p>
        <p className='post_message'>{this.props.post.attendies}</p>
        <div className='control-buttons'>
          <button
            className='edit'
            onClick={() => this.props.editEvent(this.props.post)}
          >
            Edit
          </button>
          <button
            className='delete'
            onClick={() => this.props.deleteEvent(this.props.post._id)}
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
      deleteEvent: deleteEvent,
      editEvent: editEvent
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Post1);
