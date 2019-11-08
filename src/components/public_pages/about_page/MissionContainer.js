import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class AboutContainers extends Component {
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
              Our Mission <br /> <br />
            </Grid>

            <Grid id="AboutContainerText" item xs={9} lg={9}>
              It is our goal to simplify the knowledge sharing process among
              researchers and data scientists. By making it as simple as
              possible to share data and gathered insights with colleagues, we
              want to drive a culture of collaboration and teamwork at
              universities all around the world.
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
