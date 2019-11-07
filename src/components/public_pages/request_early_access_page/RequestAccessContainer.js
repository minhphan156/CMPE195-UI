import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class RequestAccessContainers extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };
    }

    async componentDidMount() {}

    async componentDidUpdate() {}

    render() {
      return (
        <div>
          <Grid
            container
            id="MissionContainer"
            spacing={0}
            alignItems="flex-start"
            direction="row"
            justify="center"
          >
            <Grid id="AboutContainerTitle" item xs={12} lg={12}>
              Request Early Access
            </Grid>

            <Grid id="AboutContainerText" item xs={9} lg={9}>
              SOME FORM TO REQUEST EARLY ACCESS{" "}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
