import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import "./KnowledgePost.css";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import InsertLink from "@material-ui/icons/InsertLink";
import CloudDownload from "@material-ui/icons/CloudDownload";
import { clearUpload } from "../../actions/getPostsActions";
import moment from 'moment';
import axios from "axios";
import { withAuth } from "@okta/okta-react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3d4e96"
    },
    secondary: {
      main: "#2c76a9"
    }
  }
});

const styles = theme => ({
  chipRoot: {
    fontSize: 16,
    margin: 5,
    padding: 1
  },
  DataSetButton: {
    fontSize: 18
  },
  visibilityIcon: {
    color: "#3d4e96",
    fontSize: 19,
    marginTop: 5
  },
  downloadIcon: {
    marginRight: 6
  },
  linkIcon: {
    marginRight: 5
  },
  viewCount: {
    fontSize: 16,
    marginTop: 4,
    marginRight: 3,
    color: "#3d4e96"
  }
});

class Post extends Component {
  constructor(props) {
    super(props);

    this.onDownloadNotebookClick = this.onDownloadNotebookClick.bind(this);
  }
  
  async componentDidMount() {
    window.scrollTo(0, 0);

    // Here we tell MathJax to update and render all math 
    window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]);
  }

  componentWillUnmount() {
    this.props.clearUpload();
  }
  
  async onDownloadNotebookClick() {
    const { auth, upload } = this.props;
    const { getAccessToken } = auth;
    const { hashID } = upload.upload;
    
    const token = await getAccessToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true
    }
    
    const getNotebookLinkPath = `http://0.0.0.0:3001/api/notebook/${hashID}`;
    const response = await axios.get(getNotebookLinkPath, config);
    window.location = response.data.downloadLink
  }

  render() {
    const { classes } = this.props;
    const { upload } = this.props.upload;

    let dataLinkButton;
    let dataLink;
    if (upload != null) {
      dataLink = "/" + upload.metadata.dataset;

      // if there is a dataset, display a link to it
      if (upload.metadata.datasetLink != null) {
        dataLinkButton = (
          <a href={upload.metadata.datasetLink} target="_blank" rel="noopener noreferrer">
            <Button size="medium" variant="outlined">
              <InsertLink className={classes.linkIcon} />
              Data Set
            </Button>
          </a>
        );
      } else {
        dataLinkButton = <br />;
      }

      return (
        <Grid
          container
          spacing={0}
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Paper className="infoPaper">
            <Grid container justify="space-between" alignItems="flex-start">
              <Grid className="KnowledgePostTitle" item>
                {upload.metadata.title}
              </Grid>
              <Grid item>
                <Grid
                  container
                  className="viewContainer"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Grid className="viewContainer" className={classes.viewCount}>
                    {upload.metadata.views}
                  </Grid>
                  <Grid className="viewContainer">
                    <Visibility className={classes.visibilityIcon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justify="space-between" alignItems="flex-start">
              <Grid className="KnowledgePostText" item>
                {upload.metadata.authors}
                <div className="KnowledgePostTime">
                  {moment(upload.metadata.createdAt).format(
                    "MMMM DD, YYYY hh:mm:ss"
                  )}
                </div>
              </Grid>
            </Grid>
            <Grid container justify="flex-end" alignItems="flex-start">
              <Grid item>
                <Button size="medium" variant="outlined" onClick={this.onDownloadNotebookClick}>
                  <CloudDownload className={classes.downloadIcon} />
                  ipynb
                </Button>
              </Grid>

              <Grid item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={upload.metadata.dataset}
                >
                  {dataLinkButton}
                </a>
              </Grid>
            </Grid>

            <Grid className="KnowledgePostText" item>
              {"Tags: "}
              {upload.metadata.tags.map(item => (
                <Chip
                  color="primary"
                  label={item}
                  classes={{
                    root: classes.chipRoot
                  }}
                />
              ))}
            </Grid>

            <br />

            <Grid className="KnowledgePostSummary" item>
              {upload.metadata.summary}
            </Grid>
          </Paper>

          <Paper className="notebookPaper">
            <Grid>
              <div
                id="notebook-container"
                dangerouslySetInnerHTML={{
                  __html: upload.html
                }}
              />
            </Grid>
          </Paper>
          <br></br>
          <br></br>
        </Grid>
      );
    } else {
      console.log("return null post");
      this.props.history.push("/explore");
      return null;
    }
  }
}

// need to unpack the json object twice
const mapStateToProps = state => ({
  upload: state.upload
});

export default withAuth(withStyles(styles)(
  connect(mapStateToProps, { clearUpload })(Post)
));
