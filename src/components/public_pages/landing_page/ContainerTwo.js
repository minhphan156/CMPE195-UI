import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { checkAuthentication } from "../../../helpers/checkAuthHelper";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class ContainerTwo extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };
      this.checkAuthentication = checkAuthentication.bind(this);
    }

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      await this.checkAuthentication();
    }

    render() {
      return (
        <div id="ContainerTwoContainer">
          <Grid
            container
            spacing={0}
            alignItems="flex-start"
            direction="column"
            justify="center"
          >
            <Grid id="ContainerTwoTitle" row xs={9} md={5} lg={6}>
              Designed to protect your data
            </Grid>
            <Grid id="ContainerTwoText" row xs={9} sm={7} md={5} lg={4}>
              We are committed to protect your data and privacy. Your research
              belongs to you, and only you.
              <br />
              <Link to="security-manifesto" className="ContainerTwoLink">
                Learn more how we handle your data.
              </Link>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
