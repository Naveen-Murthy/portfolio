import React, { Component } from 'react';
import PdfViewer from './PdfViewer';
import './Resume.css';

class Resume extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {};
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
      <section>
        <div>Resume</div>
        {/* <iframe src="https://drive.google.com/file/d/1hGPc4yIIb6oUkO792lIbsKHsrID9fmer/preview" width="640" height="480"></iframe> */}
        <PdfViewer pdf="resume.pdf"/>
      </section>
    );
  }
}

export default Resume;