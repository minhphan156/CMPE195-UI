import React from "react";
import "../styles_for_components/Footer.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer id="footer">
      <Grid container alignItems="center" justify="space-evenly">
        <Grid container lg={7} alignItems="center" justify="space-evenly">
          <Grid className="footerLayout" item>
            <Link to="/about" className="headerMenuLink">
              About
            </Link>
          </Grid>
          <Grid className="footerLayout" item>
            <Link to="/terms-of-service" className="headerMenuLink">
              Terms of Service
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={0} className="footerLayout" justify="center">
        © SURD Technologies {new Date().getFullYear()}
      </Grid>
    </footer>
  );
};
