import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { withAuth } from "@okta/okta-react";
import React, { Component } from "react";
import { checkAuthentication } from "../../../helpers/checkAuthHelper";
import "../styles_for_components/Navbar.css";

export default withAuth(
  class LandingHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = checkAuthentication.bind(this);
      // this.login = this.login.bind(this);
      // this.logout = this.logout.bind(this);
      this.upload = this.upload.bind(this);
    }

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    upload() {
      this.props.upload("/upload");
    }

    render() {
      return (
        <div className="headerContainer ">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 navbar-image">
            <div className="navbar-image headerfont">
              <Grid
                className="navbarContent"
                container
                spacing={32}
                direction="column"
                alignItems="baseline"
              >
                <Grid className="headerTitle" item xs={12} sm={7} md={6} lg={6}>
                  The Knowledge Platform
                </Grid>
                <Grid className="headerText" item xs={12} sm={4} md={4} lg={4}>
                  We empower researchers and data scientists at large
                  organizations to share their proprietary research at scale.
                </Grid>

                <Grid
                  className="buttonRedContainer"
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  lg={5}
                >
                  <Link to="/early-access">
                    <Button class="button buttonRed">
                      Request Early Access
                    </Button>
                  </Link>
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
                  The Knowledge Platform
                </Grid>
                <Grid
                  className="headerTextSmall"
                  item
                  xs={8}
                  sm={4}
                  md={4}
                  lg={4}
                >
                  We empower researchers and data scientists at large
                  organizations to share their proprietary research at scale.
                </Grid>

                <Grid
                  className="buttonRedContainer"
                  item
                  xs={8}
                  sm={4}
                  md={4}
                  lg={5}
                >
                  <Link to="/early-access">
                    <Button class="button buttonRedSmall">
                      Request Early Access
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </nav>
        </div>
      );
    }
  }
);
