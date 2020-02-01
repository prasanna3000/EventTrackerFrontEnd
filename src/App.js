import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost1 from './AllPost1';
// import AllPost2 from './AllPost2';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='navbar'>
          <h2 className='center'>Event Management</h2>
        </div>
        <PostForm />
        {<AllPost1 />}
        {/* {<AllPost2 />} */}
      </div>
    );
  }
}
export default App;
