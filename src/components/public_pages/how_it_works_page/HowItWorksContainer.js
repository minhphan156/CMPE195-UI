import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class HowItWorksContainers extends Component {
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
            id="HowItWorksContainer"
            spacing={0}
            alignItems="flex-start"
            direction="row"
            justify="center"
          >
            <Grid id="AboutContainerText" item xs={9} lg={9}>
              Research is the lifeblood of technological and scientific
              progress, lying at the core of many universities’ mission
              statements. Data analytics and visualization are quickly becoming
              a large part of this multidisciplinary research as focus shifts to
              extracting knowledge from vast amounts of data. University
              researchers in all fields of science, business, math, and
              humanities are contributing to the mission of finding signals in
              the expanse of collected data and eventually hoping to produce
              insights that could be game-changing.
              <br></br>
              <br></br>
              SURD allows uploading of research domain documents (IPYNB),
              displays findings in plain text alongside easy-to-view graphs, and
              permits users to search through troves of research with ease. All
              of this occurs while the university findings are being stored
              securely, and only accessible for viewing to authorized members of
              the organization until clearance for release.
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
