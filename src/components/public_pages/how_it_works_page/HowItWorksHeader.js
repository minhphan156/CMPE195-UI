import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { withAuth } from "@okta/okta-react";
import React, { Component } from "react";
import "../styles_for_components/Navbar.css";
import "../styles_for_components/AboutPage.css";

export default withAuth(
  class HowItWorksHeader extends Component {
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
                  sm={9}
                  md={8}
                  lg={8}
                >
                  How it works...
                </Grid>
                <Grid
                  className="AboutHeaderText"
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={6}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt
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
                  className="AboutHeaderTitleSmall"
                  // justify="space-evenly"
                  alignItems="center"
                  item
                  xs={10}
                  sm={8}
                  md={6}
                  lg={6}
                >
                  {" "}
                  <br />
                  How it works...
                  {/* knowledge sharing platform */}
                </Grid>
                <Grid
                  className="headerTextSmall"
                  item
                  xs={9}
                  sm={5}
                  md={4}
                  lg={4}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt
                </Grid>
              </Grid>
            </div>
          </nav>
        </div>
      );
    }
  }
);
