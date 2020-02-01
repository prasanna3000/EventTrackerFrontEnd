import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from './actions/postActions';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const post = [
      {
        event_date: findDOMNode(this.refs.date).value,
        event_time: findDOMNode(this.refs.time).value,
        description: findDOMNode(this.refs.desc).value,
        attendies: findDOMNode(this.refs.attendies).value,
        editing: false
      }
    ];

    this.props.addEvent(post);
  };
  render() {
    return (
      <div className='post-container'>
        <h1 className='post_heading'>Create Event</h1>
        <form className='form' onSubmit={this.handleSubmit}>
          <input
            required
            type='date'
            ref='date'
            placeholder='Enter the Event Date'
          />
          <br />
          <br />
          <input
            required
            type='time'
            ref='time'
            placeholder='Enter the event Time'
          />
          <br />
          <br />
          <textarea
            required
            rows='5'
            cols='28'
            placeholder='Enter Description'
            ref='desc'
          />
          <br />
          <br />

          <input
            required
            type='text'
            placeholder='Enter the Attendies'
            ref='attendies'
          />
          <br />
          <br />
          <button>Add Event</button>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addEvent: addEvent
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(PostForm);
