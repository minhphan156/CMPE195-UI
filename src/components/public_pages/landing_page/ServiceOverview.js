import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { checkAuthentication } from "../../../helpers/checkAuthHelper";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";
import JupLogo2 from "../../../assets/Jupyter_logo.png";
import Security from "../../../assets/security.png";
import Insights from "../../../assets/insights.png";

export default withAuth(
  class ServiceOverview extends Component {
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
        <div>
          <Grid
            container
            justify={"space-evenly"}
            spacing={0}
            id="ServiceOverviewContainer"
          >
            <Grid id="ServiceOverviewContainerText" item xs={7} sm={2} lg={2}>
              <img className="landing-images" src={JupLogo2} alt="" />
              <br /> <br />
              <div> Share Jupyter Notebooks with colleagues</div>
            </Grid>

            <Grid id="ServiceOverviewContainerText" item xs={7} sm={2} lg={2}>
              <img className="landing-images" src={Security} alt="" />
              <br />
              <br />
              Rest assured, your data is secure
            </Grid>

            <Grid id="ServiceOverviewContainerText" item xs={7} sm={2} lg={2}>
              <img className="landing-images" src={Insights} alt="" />
              <br /> <br />
              Discover new insights, more efficiently
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
