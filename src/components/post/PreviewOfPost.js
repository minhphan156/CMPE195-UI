import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import "./KnowledgePost.css";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InsertLink from "@material-ui/icons/InsertLink";
import { uploadNotebookFinal } from "../../actions/uploadActions";
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
  linkIcon: {
    marginRight: 5
  }
});

class Post extends Component {
  handlePublish = () => {
    this.props.auth
      .getAccessToken()
      .then(token => {
        this.props.uploadNotebookFinal(this.props.history, token);
      })
      .catch(err => console.log(err));
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { upload } = this.props.upload;
    let dataLinkButton;
    let dataLink;

    if (upload !== null) {
      dataLink = "/" + upload.metadata.dataset;

      // if there is a dataset, display a link to it
      if (upload.metadata.dataset !== "null") {
        dataLinkButton = (
          <Button size="medium" variant="outlined">
            <InsertLink className={classes.linkIcon} />
            Data Set
          </Button>
        );
      } else {
        dataLinkButton = <br />;
      }
    }

    return (
      <div>
        {upload ? (
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
                  <Link to="Post">
                    <Button onClick={this.handlePublish} class="publishbutton">
                      Publish
                    </Button>
                  </Link>
                </Grid>
              </Grid>

              <Grid container justify="space-between" alignItems="flex-start">
                <Grid className="KnowledgePostText" item>
                  {upload.metadata.authors}
                  <div className="KnowledgePostTime">
                    {upload.metadata.time}
                  </div>
                </Grid>
              </Grid>

              <Grid container justify="flex-end" alignItems="flex-start">
                <Grid className="DataSetButton" item>
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
                  dangerouslySetInnerHTML={{ __html: upload.html.final_html }}
                />
              </Grid>
            </Paper>
            <br></br>
            <br></br>
          </Grid>
        ) : null}
      </div>
    );
  }
}

// need to unpack the json object twice
const mapStateToProps = state => ({
  upload: state.upload
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { uploadNotebookFinal }
  )(withAuth(Post))
);
