import React, { Component } from 'react';
import PdfViewer from './PdfViewer';

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
      <div className="main_page">
        {/* <iframe src="https://drive.google.com/file/d/1hGPc4yIIb6oUkO792lIbsKHsrID9fmer/preview" width="640" height="480"></iframe> */}
        <PdfViewer pdf="resume.pdf"/>
        <div className="button_download">
          <a className="button-styles" target="blank" href="resume.pdf">
            Download
          </a>
        </div>
      </div>
    );
  }
}

export default Resume;