import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const styles = {
  CardContainer: {
    width: 890,
    minHeight: 400,
    marginBottom: 40,
    marginRight: 120
  },
  CardHeader: {
    fontSize: 30,
    paddingTop: 17,
    paddingLeft: 17
  },
  CardHeaderRoot: {
    padding: 0
  },
  CardContentRoot: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingBottom: "0px !important"
  },
  AuthorTeamName: {
    fontSize: 15,
    marginTop: 8,
    marginBottom: 8
  },
  UnderLineHeader: {
    borderBottom: "solid #F0605C",
    width: 30,
    marginLeft: 20
  },
  TagContainer: {
    fontSize: 13,
    marginRight: 7,
    marginTop: 6,
    marginBottom: 12,
    textTransform: "none",
    borderRadius: 21,
    backgroundColor: "#BFE3EE"
  },
  SummaryHeader: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 8
  },
  SummaryBody: {
    width: 494,
    minHeight: 90,
    backgroundColor: "#dee5ef",
    borderRadius: 10,
    padding: 10,
    fontSize: 13
  },
  CardImage: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    margin: 30,
    width: 287,
    height: 287
  },
  CardActionContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: 890,
    paddingLeft: 20,
    fontSize: 13
  },
  ShowMoreContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  ShowMoreButton: {
    fontSize: 13,
    textTransform: "none",
    padding: 0,
    color: "#F0605C"
  },
  ShowMoreIcon: {
    padding: 0,
    color: "#F0605C"
  },
  CardActionRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },
  CardActionRightFavIcon: {
    fontSize: 13,
    color: "#2B76A8"
  },
  CardActionRightVisiIcon: {
    fontSize: 13,
    color: "#2B76A8"
  },
  CardActionRightText: {
    fontSize: 13,
    marginLeft: 5,
    marginRight: 10
  },
  CardActionRightDocType: {
    fontSize: 13,
    textAlign: "center",
    marginRight: 7,
    marginTop: 6,
    marginBottom: 12,
    padding: 0,
    width: 40,
    textTransform: "none",
    borderRadius: 21,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#2B76A8"
  }
};
class ExploreCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.CardContainer}>
        <div style={{ display: "flex" }}>
          <div>
            <CardHeader
              title={this.props.title}
              classes={{
                title: classes.CardHeader,
                root: classes.CardHeaderRoot
              }}
            />
            <div className={classes.UnderLineHeader} />

            <CardContent
              classes={{
                root: classes.CardContentRoot
              }}
            >
              <Typography className={classes.AuthorTeamName}>
                {this.props.authors}
              </Typography>

              {this.props.tags.map(tag => (
                <Button variant="contained" className={classes.TagContainer}>
                  {tag}
                </Button>
              ))}

              <Typography className={classes.SummaryHeader}>Summary</Typography>

              <Typography className={classes.SummaryBody} paragraph>
                {this.props.summary}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            image={require("../../assets/Insert_image_here.png")}
            title="Insert Image Here"
            className={classes.CardImage}
          />
        </div>
        <CardActions
          className={classes.CardActionContainer}
          disableActionSpacing
        >
          <div>Published {this.props.create_at}</div>

          <IconButton>
            <div className={classes.ShowMoreContainer}>
              <div className={classes.ShowMoreButton}>Show more</div>
              <ExpandMoreIcon className={classes.ShowMoreIcon} />
            </div>
          </IconButton>

          <div className={classes.CardActionRight}>
            <Visibility className={classes.CardActionRightVisiIcon} />
            <div className={classes.CardActionRightText}>
              {this.props.views}
            </div>
            <div className={classes.CardActionRightDocType}>PDF</div>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ExploreCard);
