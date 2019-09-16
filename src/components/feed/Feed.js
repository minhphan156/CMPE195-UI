import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

// import "../../styles/LandingPage.css";

class Feed extends Component {
  render() {
    const navbar = ["LogoHere", "Search", "Avatar"];

    return (
      <div>
        {/* navigation bar */}
        <Toolbar
          variant="dense"
          className="ToolbarSecondary"
          style={{ backgroundColor: "grey" }}
        >
          {navbar.map(item => (
            <Button>{item}</Button>
          ))}
        </Toolbar>
        <Grid container justify="center" alignItems="center" spacing={24}>
          {/* first dummy feed */}

          <Grid item xs={8}>
            <Card style={{ display: "flex" }}>
              <div>
                <CardHeader title="Title Of Post" />
                <CardContent>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                  >
                    #tag one
                  </Fab>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                  >
                    #tag two
                  </Fab>
                  <Typography>Author Name - Team Name</Typography>
                  <Typography style={{ marginTop: "10px" }}>Summary</Typography>

                  <Typography style={{ backgroundColor: "#dee5ef" }}>
                    We empower reserachers and data scientists at large
                    organization to share their propriortary research at scale.
                  </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                  <IconButton aria-label="Add to favorites">
                    <div style={{ fontSize: 20 }}>
                      <FavoriteIcon style={{ fontSize: 20 }} /> 1234
                    </div>
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="Show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </div>
              <CardMedia
                image={require("../../assets/Insert_image_here.svg")}
                title="Insert Image Here"
                className="LandingPageMainImage"
              />
            </Card>
          </Grid>

          {/* second dummy feed */}

          <Grid item xs={8}>
            <Card style={{ display: "flex" }}>
              <div>
                <CardHeader title="Title Of Post" />
                <CardContent>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                  >
                    #tag one
                  </Fab>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                  >
                    #tag two
                  </Fab>
                  <Typography>Author Name - Team Name</Typography>
                  <Typography style={{ marginTop: "10px" }}>Summary</Typography>

                  <Typography style={{ backgroundColor: "#dee5ef" }}>
                    We empower reserachers and data scientists at large
                    organization to share their propriortary research at scale.
                  </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                  <IconButton aria-label="Add to favorites">
                    <div style={{ fontSize: 20 }}>
                      <FavoriteIcon style={{ fontSize: 20 }} /> 1234
                    </div>
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="Show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </div>
              <CardMedia
                image={require("../../assets/Insert_image_here.svg")}
                title="Insert Image Here"
                className="LandingPageMainImage"
              />
            </Card>
          </Grid>

          {/* third dummy feed */}

          <Grid item xs={8}>
            <Card style={{ display: "flex" }}>
              <div>
                <CardHeader title="Title Of Post" />
                <CardContent>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                  >
                    #tag one
                  </Fab>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                  >
                    #tag two
                  </Fab>
                  <Typography>Author Name - Team Name</Typography>
                  <Typography style={{ marginTop: "10px" }}>Summary</Typography>

                  <Typography style={{ backgroundColor: "#dee5ef" }}>
                    We empower reserachers and data scientists at large
                    organization to share their propriortary research at scale.
                  </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                  <IconButton aria-label="Add to favorites">
                    <div style={{ fontSize: 20 }}>
                      <FavoriteIcon style={{ fontSize: 20 }} /> 1234
                    </div>
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="Show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </div>
              <CardMedia
                image={require("../../assets/Insert_image_here.svg")}
                title="Insert Image Here"
                className="LandingPageMainImage"
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Feed;
