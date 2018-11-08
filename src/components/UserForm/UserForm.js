import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import axios from "axios";

import classes from "./UserForm.css";
// code found on https://blog.stvmlbrn.com/2017/12/17/upload-files-using-react-to-node-express-server.html

class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            description: "",
            selectedFile: ""
        };
    }

    onChange = e => {
        switch (e.target.name) {
            case "selectedFile":
                this.setState({ selectedFile: e.target.files[0] });
                if (e.target.files[0] !== undefined) {
                    document.getElementById("fileName").innerHTML =
                        e.target.files[0].name;
                }
                break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }
    };

    onSubmit = e => {
        e.preventDefault();
        const { description, selectedFile } = this.state;
        let formData = new FormData();

        formData.append("description", description);
        formData.append("selectedFile", selectedFile);

        axios.post("/", formData).then(result => {
            // access results...
        });
    };

    //Sends click event to input element when upload div is clicked
    middleMan = () => {
        document.getElementById("uploadInput").click();
    };

    middleMan2 = () => {
      document.getElementById("submitInput").click();
    }

    render() {
        const { description, selectedFile } = this.state;
        return (
            <form
                onSubmit={this.onSubmit}
                className={classes.UserForm}
                onClick={this.onChange}
            >
                <div className={classes.ImageContainer}>
                    <div
                        id="uploadButton"
                        className={classes.UploadButton}
                        onClick={this.middleMan}
                    >
                            UPLOAD SCHEDULE &nbsp;
                            <FontAwesomeIcon icon="upload" color="#25116c"/>
                    </div>
                    <div className={classes.SubmitButton} onClick={this.middleMan2}>GO</div>
                    <h3 id="fileName" className={classes.FileName} />
                </div>
                <input
                    id="uploadInput"
                    type="file"
                    name="selectedFile"
                    accept=".html, .htm"
                    onChange={this.onChange}
                    className={classes.Special}
                />
                <button id="submitInput" type="submit"className={classes.Special} />
            </form>
        );
    }
}
export default UserForm;
