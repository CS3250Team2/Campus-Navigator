import React, { Component } from 'react';
    import axios from 'axios';
    import classes from './UserForm.css';

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
      middleMan = () => {
        document.getElementById("uploadButton").click();
      }

      render() {
        const { description, selectedFile } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <img
              src="http://growhousegaming.com/assets/imgs/CampusNav/uploadButton.png"
              for="uploadButton"
              onClick={this.middleMan}
            />
            <input
              id="uploadButton"
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
