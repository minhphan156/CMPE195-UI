import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import DOMPurify from "dompurify";
// import "../../styles/LandingPage.css";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

class Post extends Component {
  render() {
    const navbar = ["SERD", "Search", "Avatar"];
    const html = this.props.upload.upload;

    //********************/this should be removed by the completion of issue #36
    const metaData = this.props.metaData;

    console.log(
      "post component metadata ",
      JSON.stringify(this.props.metaData)
    );
    return (
      <div>
        {metaData ? (
          <div>
            <Grid item xs={12} spacing={24}>
              <Toolbar variant="dense" className="ToolbarSecondary">
                {navbar.map(item => (
                  <Button>{item}</Button>
                ))}
              </Toolbar>
              <Card>
                {/* <CardHeader title={metaData.title} subheader={metaData.authors}
                />
                <Typography component="p">
                  {metaData.time}
                </Typography>
                <Typography component="p">
                  {metaData.tags}
                </Typography>
                <CardContent>
                  <Typography component="p">
                    {metaData.summary}
                  </Typography>
                </CardContent> */}
                <div dangerouslySetInnerHTML={{ __html: html }} />
                {/* <Typography component="p">
                  {metaData.dataset}
                </Typography> */}
              </Card>
            </Grid>
          </div>
        ) : null}
      </div>
    );
  }
}
// need to unpack the json object twice
const mapStateToProps = state => ({
  upload: state.upload,
  //********************/this should be removed by the completion of issue #36
  metaData: state.metaData.metaData
});

export default connect(
  mapStateToProps,
  {}
)(Post);
