import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { checkAuthentication } from "../../../helpers/checkAuthHelper";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class NavbarMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, anchorEl: null };
      this.checkAuthentication = checkAuthentication.bind(this);
      this.login = this.login.bind(this);
    }

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    async login() {
      window.location.reload();

      this.setState({ anchorEl: null });
      this.props.auth.login("/");
    }

    render() {
      const { anchorEl } = this.state;
      const open = Boolean(anchorEl);

      return (
        <div>
          <IconButton
            aria-label="More"
            aria-owns={open ? "long-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon className="menuBurger" />
          </IconButton>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={this.login}>Early Access Login</MenuItem>
            <Link to="/HowItWorks" className="navbarMenuButtons">
              <MenuItem onClick={this.handleClose}>How It Works</MenuItem>
            </Link>
            <Link to="/SecurityManifesto" className="navbarMenuButtons">
              <MenuItem onClick={this.handleClose}>Security</MenuItem>
            </Link>
            <Link to="/About" className="navbarMenuButtons">
              <MenuItem onClick={this.handleClose}>About</MenuItem>
            </Link>
          </Menu>
        </div>
      );
    }
  }
);
