import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { uploadNotebookDraft } from "../../actions/uploadActions";
import ChipInput from "material-ui-chip-input";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import moment from "moment";
import MDSpinner from "react-md-spinner";
import Done from "@material-ui/icons/Done";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";
import { withAuth } from "@okta/okta-react";

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);

class Upload extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      authors: [],
      time: "",
      tags: [],
      summary: "",
      dataset: [],
      notebook: null,
      isSubmit: false,
      isFilledOut: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleAddTags = this.handleAddTags.bind(this);
    this.handleDeleteTags = this.handleDeleteTags.bind(this);
    this.handleInit = this.handleInit.bind(this);
    this.checkForm = this.checkForm.bind(this);
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
  }

  // update the component state of TextField
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }, this.checkForm);
  }

  // add hashtags
  handleAddTags(tags) {
    this.setState(
      {
        tags: [...this.state.tags, tags]
      },
      this.checkForm
    );
  }

  // delete hashtags
  handleDeleteTags(deletedTags) {
    this.setState(
      {
        tags: this.state.tags.filter(tag => tag !== deletedTags)
      },
      this.checkForm
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    const uploadData = {
      title: this.state.title,
      authors: this.state.authors,
      summary: this.state.summary,
      tags: this.state.tags,
      dataset: this.state.dataset,
      notebook: this.state.notebook[0],
      time: time
    };
    this.setState({ isSubmit: true });

    this.props.auth
      .getAccessToken()
      .then(token => {
        this.props.uploadNotebookDraft(uploadData, this.props.history, token);
      })
      .catch(err => console.log(err));
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  checkForm() {
    if (
      this.state.title != "" &&
      this.state.authors.length != 0 &&
      this.state.tags.length != 0 &&
      this.state.summary != "" &&
      this.state.notebook != null &&
      this.state.notebook.length != 0
    ) {
      this.setState({ isFilledOut: true });
    } else {
      this.setState({ isFilledOut: false });
    }
  }

  render() {
    const { upload } = this.props.upload;

    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "300px"
        }}
      >
        <br></br>
        <Grid id="AboutContainerTitle">Upload Notebook</Grid>
        <br></br>
        <form
          style={{
            display: "flex",
            flexDirection: "column"
          }}
          onSubmit={this.onSubmit}
        >
          <TextField
            id="outlined-title"
            value={this.state.title}
            onChange={this.onChange}
            name="title"
            label="Title"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-authors"
            value={this.state.authors}
            onChange={this.onChange}
            name="authors"
            label="Authors"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-authors"
            value={this.state.summary}
            onChange={this.onChange}
            name="summary"
            label="Summary"
            margin="normal"
            variant="outlined"
          />
          <div
            style={{
              marginTop: 16,
              marginBottom: 8,
              borderRadius: 5,
              backgroundColor: "white",
              border: "1px solid lightgrey",
              padding: 10
            }}
          >
            <Typography
              style={{
                marginTop: 4,
                marginLeft: 4,
                fontSize: 11,
                fontWeight: "bold"
              }}
              variant="display1"
              gutterBottom
            >
              Tags
            </Typography>
            <MuiThemeProvider>
              <ChipInput
                fullWidth="true"
                value={this.state.tags}
                onRequestAdd={chip => this.handleAddTags(chip)}
                onRequestDelete={(chip, index) =>
                  this.handleDeleteTags(chip, index)
                }
              />
            </MuiThemeProvider>
          </div>

          <TextField
            id="outlined-datasetLinks"
            value={this.state.dataset}
            onChange={this.onChange}
            name="dataset"
            label="Link to Dataset (Optional)"
            margin="normal"
            variant="outlined"
          />

          <FilePond
            acceptedFileTypes={[".ipynb"]}
            fileValidateTypeDetectType={(source, type) =>
              new Promise((resolve, reject) => {
                // Do custom type detection here and return with promise
                if (/\.(ipynb)$/i.test(source.name) === false) {
                  reject();
                } else {
                  resolve(".ipynb");
                }
              })
            }
            ref={ref => (this.pond = ref)}
            files={this.state.notebook}
            allowMultiple={true}
            maxFiles={1}
            oninit={() => this.handleInit()}
            onupdatefiles={fileItems => {
              this.setState(
                {
                  notebook: fileItems.map(fileItem => fileItem.file)
                },
                this.checkForm
              );
            }}
          />
          {upload ? (
            <div style={{ width: 350 }}>
              <Link to="/preview" className="navbarMenuButtons">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: 10,
                    width: 300,
                    marginBottom: 15
                  }}
                >
                  Preview
                </Button>
              </Link>
              <Done
                style={{ color: "green", marginLeft: 5, marginBottom: -6 }}
              />
            </div>
          ) : this.state.isSubmit ? (
            <div style={{ width: 350 }}>
              <Button
                type="submit"
                variant="contained"
                color="default"
                style={{ marginTop: 10, width: 300, marginBottom: 15 }}
                disabled={true}
              >
                Preview
              </Button>
              <MDSpinner style={{ marginLeft: 5 }} />
            </div>
          ) : this.state.isFilledOut && this.state.notebook ? (
            <Button
              type="submit"
              variant="contained"
              color="default"
              style={{ marginTop: 10, marginBottom: 15 }}
            >
              Upload
            </Button>
          ) : (
            <Button
              disabled={true}
              type="submit"
              variant="contained"
              color="default"
              style={{ marginTop: 10, marginBottom: 15 }}
            >
              Upload
            </Button>
          )}
        </form>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  upload: state.upload
});

export default connect(
  mapStateToProps,
  { uploadNotebookDraft }
)(withAuth(Upload));
