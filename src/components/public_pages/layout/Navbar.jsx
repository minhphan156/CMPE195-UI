import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withAuth } from "@okta/okta-react";
import React, { Component } from "react";
import { checkAuthentication } from "../../../helpers/checkAuthHelper";
import "../styles_for_components/Navbar.css";
import ourLogo from "../../../assets/logo_white.png";
import NavbarMenu from "./NavbarMenu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import profileIcon from "../../../assets/profileIcon.png";

const styles = theme => ({
  root: {
    width: "100%"
  },
  search: {
    position: "relative",
    borderRadius: 13.6327,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  searchRoot: {
    color: "inherit",
    width: "100%"
  },
  searchInput: {
    fontSize: 18,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  inputMenuRoot: {
    fontSize: 16
  }
});

export default withStyles(styles)(
  withAuth(
    class Navbar extends Component {
      constructor(props) {
        super(props);
        this.state = {
          anchorEl: null,
          authenticated: null
        };
        this.checkAuthentication = checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.upload = this.upload.bind(this);
      }

      async componentDidMount() {
        this.checkAuthentication();
      }

      async componentDidUpdate() {
        this.checkAuthentication();
      }

      async login() {
        window.location.reload();

        this.props.auth.login("/");
      }

      async logout() {
        this.props.auth.logout("/");
      }

      upload() {
        this.props.upload("/upload");
      }

      handleChange = event => {
        this.setState({ auth: event.target.checked });
      };

      handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
      };

      handleClose = () => {
        this.setState({ anchorEl: null });
      };

      render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        let makePostButton;
        let searchBar;

        var fableHeader = document.getElementById("fableHeader");

        if (window.location.pathname !== "/upload") {
          makePostButton = (
            <Link to="/upload">
              <Button class="buttonAuth buttonGreyAuth" primary>
                Make a Post
              </Button>
            </Link>
          );

          searchBar = (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          );
        } else {
          makePostButton = null;
          searchBar = null;
        }

        if (this.state.authenticated !== null) {
          if (this.state.authenticated) {
            fableHeader.classList.add("fixedElement");
          } else {
            fableHeader.classList.remove("fixedElement");
          }
        }

        return (
          <div id="fableHeader">
            {this.state.authenticated !== null && (
              <div>
                {this.state.authenticated && (
                  <div>
                    <Grid
                      container
                      className="navbarContainerAuth headerfont"
                      spacing={0}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid className="navbarLogoAuth" item>
                        <Link to="/explore">
                          <img
                            className="logo-whiteAuth"
                            src={ourLogo}
                            alt=""
                          />
                        </Link>
                      </Grid>

                      <Grid className="searchBarAuth" item lg={6}>
                        {searchBar}
                      </Grid>

                      <Grid item>
                        {makePostButton}
                        <IconButton
                          className="profileIconContainer"
                          aria-owns={open ? "menu-appbar" : undefined}
                          aria-haspopup="true"
                          onClick={this.handleMenu}
                          color="inherit"
                        >
                          <img
                            className="profileIcon"
                            src={profileIcon}
                            alt=""
                          />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          open={open}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleClose}>
                            My Account
                          </MenuItem>

                          <MenuItem onClick={this.logout}>Logout</MenuItem>
                        </Menu>
                      </Grid>
                    </Grid>
                  </div>
                )}
                {!this.state.authenticated && (
                  <div className="navbarContainer ">
                    <Grid
                      container
                      className="navbarContainer headerfont"
                      spacing={0}
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid className="navbarLogo" item>
                        <Link to="/">
                          <img className="logo-white " src={ourLogo} alt="" />
                        </Link>
                      </Grid>
                      <Grid
                        container
                        spacing={0}
                        justify="space-evenly"
                        alignItems="baseline"
                        xs={1}
                        sm={9}
                        md={8}
                        lg={7}
                      >
                        <Grid item className="headerMenu">
                          <Link to="/how-it-works" className="headerMenuLink">
                            How it Works
                          </Link>
                        </Grid>
                        <Grid item className="headerMenu">
                          <Link
                            to="/security-manifesto"
                            className="headerMenuLink"
                          >
                            Security
                          </Link>
                        </Grid>
                        <Grid item className="headerMenu">
                          <Link to="/about" className="headerMenuLink">
                            About
                          </Link>
                        </Grid>
                        <Grid item>
                          <Button
                            class="button buttonGrey"
                            primary
                            onClick={this.login}
                          >
                            Early Access Login
                          </Button>
                        </Grid>
                      </Grid>

                      <Grid
                        className="smallMenu"
                        item
                        xs={1}
                        sm={1}
                        md={1}
                        lg={1}
                      >
                        <NavbarMenu className="smallMenu" />
                      </Grid>
                    </Grid>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      }
    }
  )
);
