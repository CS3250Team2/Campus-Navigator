import React, { Component } from 'react';

class FileInput extends Component{
  addFile = (file) => {
    //let files = this.refs.fileUpload.getInputDOMNode().files;
    //document.getElementById("fileNum").innerHTML = 2;
    console.log("please work")
    console.log(this.files)
  }

  render(){
    return(
      <div>
        <h3 id="blue">Heres where you'll add your saved banner .html file </h3>
        <form>
          <input type='text'
             id= 'input'
             accept='.html'
             onChange={this.addFile(this.files)}
             ref = 'fileUpload'>
           </input>
           <span id='fileNum'>0</span>
           <input type= 'submit'></input>
        </form>
      </div>
    );
  }

}

export default FileInput;
