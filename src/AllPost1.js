import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from './actions/postActions';
import Post1 from './Post1';
import EditComponent from './EditComponent';

class AllPost1 extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    return (
      <div>
        <h1 className='post_heading'>All Events</h1>
        {this.props.posts.map(post => (
          <div key={post._id}>
            {post.editing ? (
              <EditComponent post={post} key={post._id} />
            ) : (
              <Post1 key={post._id} post={post} />
            )}
          </div>
        ))}
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
      getEvents: getEvents
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPost1);
