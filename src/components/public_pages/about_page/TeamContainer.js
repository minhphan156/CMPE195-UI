import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";
import Sandro from "../../../assets/Sandro.png";
import Danil from "../../../assets/Danil.png";
import Minh from "../../../assets/Minh.png";
import Antonio from "../../../assets/Antonio.png";
import Vinny from "../../../assets/Vinny.png";
import Margot from "../../../assets/Margot.png";

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
          <Grid container id="TeamContainer">
            <Grid id="AboutContainerTitle" item xs={12} lg={12}>
              Our Team
            </Grid>

            <Grid
              container
              spacing={0}
              direction="row"
              justify="space-evenly"
              alignItems="baseline"
            >
              <Grid
                container
                spacing={0}
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
              >
                <Grid item>
                  <img className="aboutPage-images" src={Antonio} alt="" />
                  <br /> <div id="AboutPageNames">Antonio G Bares</div>
                </Grid>
                <Grid item>
                  <img className="aboutPage-images" src={Danil} alt="" />
                  <br /> <div id="AboutPageNames">Danil Kolesnikov</div>
                </Grid>
                <Grid item>
                  <img className="aboutPage-images" src={Vinny} alt="" />
                  <br /> <div id="AboutPageNames">Vinny Senthil</div>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
              >
                <Grid item>
                  <img className="aboutPage-images" src={Sandro} alt="" />
                  <br /> <div id="AboutPageNames">Sandro Sallenbach</div>
                </Grid>
                <Grid item>
                  <img className="aboutPage-images" src={Minh} alt="" />
                  <br /> <div id="AboutPageNames">Minh Phan</div>
                </Grid>
                <Grid item>
                  <img className="aboutPage-images" src={Margot} alt="" />
                  <br /> <div id="AboutPageNames">Margot Uchicua</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
