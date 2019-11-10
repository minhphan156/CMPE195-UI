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
import Visibility from "@material-ui/icons/Visibility";
import InsertLink from "@material-ui/icons/InsertLink";
import CloudDownload from "@material-ui/icons/CloudDownload";

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
  constructor() {
    super();
    this.state = {
      title: "",
      authors: "",
      time: "",
      tags: [],
      summary: "",
      dataset: null,
      notebook: null,
      isSubmit: false,
      views: 167
    };
  }

  render() {
    const { classes } = this.props;
    const { upload } = this.props.upload;
    let dataLinkButton;
    let dataLink;

    // if (upload !== null) {
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
    // }

    return (
      <div>
        <div>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="flex-start"
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
                    <Grid
                      className="viewContainer"
                      className={classes.viewCount}
                    >
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
                  {upload.metadata.time}
                  </div>
                </Grid>
              </Grid>

              <Grid container justify="flex-end" alignItems="flex-start">
                <Grid item>
                  <Link to="/DOWNLOAD" className="PostButtons">
                    <Button size="medium" variant="outlined">
                      <CloudDownload className={classes.downloadIcon} />
                      ipynb
                    </Button>
                  </Link>
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
          </Grid>

          <Grid
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Paper className="notebookoPaper">
              <Grid>
                <div
                  id="notebook-container"
                  dangerouslySetInnerHTML={{ __html: upload.html.final_html }}
                />
              </Grid>
            </Paper>
          </Grid>
        </div>
      </div>
    );
  }
}

// need to unpack the json object twice
const mapStateToProps = state => ({
  upload: state.upload
  //********************/this should be removed by the completion of issue #36
  // metaData: state.metaData.metaData
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {}
  )(Post)
);