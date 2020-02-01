import axios from 'axios';
export function editEvent(post) {
  return {
    type: 'EDIT_EVENT',
    data: post
  };
}
export function getEvents() {
  return function(dispatch) {
    axios
      .get('http://localhost:8679/posts')
      .then(function(response) {
        dispatch({ type: 'GET_EVENTS', data: response.data });
      })
      .catch(function(err) {
        dispatch({
          type: 'GET_REJECTED',
          data: 'There was an error while fetching Events'
        });
      });
  };
}
export function deleteEvent(_id) {
  return function(dispatch) {
    console.log('Event ID', _id);
    axios
      .delete('http://localhost:8679/delete/' + _id)
      .then(function(response) {
        dispatch({ type: 'DELETE_EVENT', data: _id });
      })
      .catch(function(err) {
        dispatch({ type: 'DELETE_EVENT_REJECTED', data: err });
      });
  };
}

export function addEvent(post) {
  return function(dispatch) {
    axios
      .post('http://localhost:8679/add', post, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(function(response) {
        dispatch({ type: 'ADD_EVENT', data: response.data });
      })
      .catch(function(err) {
        dispatch({
          type: 'POST_EVENT_REJECTED',
          data: 'There was an error while adding an Event'
        });
      });
  };
}

export function updateEvent(_id, post) {
  return function(dispatch) {
    axios
      .put(`http://localhost:8679/update/${_id}`, post)
      .then(function(response) {
        dispatch({
          type: 'UPDATE_EVENT',
          data: response.data
        });
      })
      .catch(function(err) {
        dispatch({
          type: 'UPDATE_EVENT_REJECTED',
          data: 'There was an error while updating an Event'
        });
      });
  };
}
