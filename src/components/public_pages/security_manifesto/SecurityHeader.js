import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { withAuth } from "@okta/okta-react";
import React, { Component } from "react";
import "../styles_for_components/Navbar.css";
import "../styles_for_components/SecurityManifestoPage.css";

export default withAuth(
  class SecurityHeader extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
    }

    async componentDidMount() {}

    async componentDidUpdate() {}

    render() {
      return (
        <div className="aboutHeaderContainer ">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="headerfont">
              <Grid
                container
                spacing={32}
                direction="column"
                alignItems="center"
              >
                <Grid
                  className="AboutHeaderTitle"
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={6}
                >
                  Security Manifesto
                </Grid>
                <Grid
                  className="AboutHeaderText"
                  item
                  xs={12}
                  sm={7}
                  md={5}
                  lg={4}
                >
                  We empower researchers and data scientists at universities to
                  share their proprietary research at scale.
                </Grid>
              </Grid>

              {/* THIS IS FOR SMALL DISPLAY ONLY */}
              <Grid
                className="navbarContentSmall"
                container
                spacing={32}
                direction="column"
                alignItems="center"
              >
                <Grid
                  className="headerTitleSmall"
                  // justify="space-evenly"
                  alignItems="center"
                  item
                  xs={8}
                  sm={7}
                  md={6}
                  lg={6}
                >
                  {" "}
                  <br />
                  Security Manifesto
                </Grid>
                <Grid
                  className="headerTextSmall"
                  item
                  xs={8}
                  sm={4}
                  md={4}
                  lg={4}
                >
                  We empower researchers and data scientists at universities to
                  share their proprietary research at scale.
                </Grid>
              </Grid>
            </div>
          </nav>
        </div>
      );
    }
  }
);
