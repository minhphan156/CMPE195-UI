import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class SecurityContainers extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };
    }

    async componentDidMount() {}

    async componentDidUpdate() {}

    render() {
      return (
        <div id="SecurityContainerAll">
          <Grid
            container
            spacing={0}
            id="SecurityContainerOne"
            alignItems="flex-start"
            direction="row"
            justify="flex-start"
          >
            <Grid id="SecurityManifestoTitle" item xs={9} lg={5}>
              Storage
            </Grid>

            <Grid id="SecurityManifestoText" item xs={9} lg={9}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ul. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat Lorem ipsum dolor.
            </Grid>
          </Grid>

          {/* /// */}
          <Grid
            container
            spacing={0}
            id="SecurityContainerTwo"
            alignItems="flex-start"
            direction="row"
            justify="flex-start"
          >
            <Grid id="SecurityManifestoTitle" item xs={9} lg={5}>
              Access
            </Grid>
            <Grid id="SecurityManifestoText" item xs={9} lg={9}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ul. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat Lorem ipsum dolor.
            </Grid>
          </Grid>
          {/* /// */}

          <Grid
            container
            spacing={0}
            id="SecurityContainerThree"
            alignItems="flex-start"
            direction="row"
            justify="flex-start"
          >
            <Grid id="SecurityManifestoTitle" item xs={9} lg={5}>
              Infrastructure{" "}
            </Grid>
            <Grid id="SecurityManifestoText" item xs={9} lg={9}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ul. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat Lorem ipsum dolor.
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
