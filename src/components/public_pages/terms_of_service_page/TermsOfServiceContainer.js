import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class TermsOfServiceContainers extends Component {
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
            <Grid id="AboutContainerText" item xs={9} lg={9}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SURD TECHNOLOGY SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, INDIRECT,
              PUNITIVE, OR SPECIAL DAMAGES, LOSS OF PROFITS, DATA OR REVENUES,
              OR OTHER INTANGIBLE LOSSES, RESULTING FROM ANY OF THE FOLLOWING:
              <br></br>
              <br></br>· YOUR USE OF OUR SERVICES<br></br>
              <br></br>· YOUR INABILITY TO ACCESS OR USE ANY OF OUR SERVICES
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
