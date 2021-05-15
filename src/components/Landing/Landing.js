import React, { Component } from 'react';

class Landing extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="landing-warapper page-content">
        <div className="profile-oval">
          <img src="/profile.png" alt="img" className="profile-image"/>
        </div>
        <div className="landing-section">
          <div className="web-developer">Web Developer</div>
        </div>
      </div>
    );
  }
}

export default Landing;