import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEvent } from './actions/postActions';
import { bindActionCreators } from 'redux';

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const event_date = this.getDate.value;
    const event_time = this.getTime.value;
    const description = this.getDescription.value;
    const attendies = this.getAttendies.value;
    const editing = false;
    const _id = this.props.post._id;
    const data = {
      event_date,
      event_time,
      description,
      attendies,
      editing
    };
    // console.log(this.props.posts);
    console.log(_id);
    this.props.updateEvent(_id, data);
  };
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleEdit}>
          <input
            required
            type='date'
            ref={input => (this.getDate = input)}
            defaultValue={this.props.post.event_date}
            placeholder='Enter the Event Date'
          />
          <br />
          <br />
          <input
            required
            type='time'
            ref={input => (this.getTime = input)}
            defaultValue={this.props.post.event_time}
            placeholder='Enter the event Time'
          />
          <br />
          <br />
          <textarea
            required
            rows='5'
            cols='28'
            defaultValue={this.props.post.description}
            placeholder='Enter Description'
            ref={input => (this.getDescription = input)}
          />
          <br />
          <br />

          <input
            required
            type='text'
            defaultValue={this.props.post.attendies}
            placeholder='Enter the Attendies'
            ref={input => (this.getAttendies = input)}
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateEvent: updateEvent
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
