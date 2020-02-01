import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from './actions/postActions';
import Post2 from './Post2';

class AllPost2 extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    return (
      <div>
        <h1 className='post_heading'>Deletable Events</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>{<Post2 key={post.id} post={post} />}</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AllPost2);
