import React, { Component } from 'react';
import axios from 'axios';
// code found on https://blog.stvmlbrn.com/2017/12/17/upload-files-using-react-to-node-express-server.html
class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      selectedFile: '',
    };
  }

  onChange = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { description, selectedFile } = this.state;
    let formData = new FormData();

    formData.append('description', description);
    formData.append('selectedFile', selectedFile);

    axios.post('/', formData)
      .then((result) => {
        // access results...
      });
  }

  render() {
    const { description, selectedFile } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="file"
          name="selectedFile"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default UserForm;
