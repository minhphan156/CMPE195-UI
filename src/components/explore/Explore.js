import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grow, Grid, Typography } from "@material-ui/core";
import ExploreCard from "./ExploreCard";
import FilterResult from "./FilterResult";
import { connect } from "react-redux";
import { getPostsActions } from "../../actions/getPostsActions";
import { withAuth } from "@okta/okta-react";
import MDSpinner from "react-md-spinner";
import moment from "moment";
import { KeyboardArrowDown, KeyboardArrowUp, Sort } from "@material-ui/icons"; // import { Button } from "semantic-ui-react";
import Button from "@material-ui/core/Button";

const styles = {
  LoadingScreen: {
    marginTop: 100,
    marginBottom: 900,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  FilterResultContainer: {
    paddingLeft: 80
  },
  SortBarContainerListView: {
    display: "flex",
    position: "fixed",
    top: 80,
    left: -50,
    zIndex: 1,
    height: 60,
    width: "100%",
    // alignItems: "flex-end",
    backgroundColor: "white"
  },
  // SortBarContainerGridView: {
  //   display: "flex",
  //   position: "fixed",
  //   top: 81,
  //   left: -314,
  //   zIndex: 1,
  //   height: 80,
  //   width: 2300,
  //   alignItems: "flex-end",
  //   backgroundColor: "white"
  // },
  SortIcon: {
    marginTop: -2,
    marginRight: 8
  },
  SortBar: {
    display: "flex",
    marginTop: 27,
    marginLeft: 520,
    color: "#F0605C"
  },
  SortBarText: {
    fontSize: 15,
    fontWeight: 700,
    marginTop: -10,
    marginRight: 30,
    paddingTop: 0,
    paddingBottom: 0

    // margin: 0
  }
  // RenderCardGridViewSpacing: {
  //   marginLeft: 110
  // },
  // ToggleButtonGroupContainerListView: {
  //   width: "fit-content",
  //   borderRadius: 17,
  //   marginLeft: 530,
  //   marginBottom: 5
  // },
  // ToggleButtonGroupContainerGridView: {
  //   width: "fit-content",
  //   borderRadius: 17,
  //   marginLeft: 115,
  //   marginBottom: 5
  // },
};
class Explore extends Component {
  constructor() {
    super();
    this.state = {
      descendingSort: true,
      listView: true,
      alignment: "" //state to handle group button click highlight
    };
    this.handleAlignment = this.handleAlignment.bind(this);
    this.changeToListView = this.changeToListView.bind(this);
    this.changeToGridView = this.changeToGridView.bind(this);
  }

  componentDidMount() {
    this.props.auth
      .getAccessToken()
      .then(token => {
        this.props.getPostsActions(token);
      })
      .catch(err => console.log(err));
  }

  //this handle the highlight of button group
  handleAlignment = (event, alignment) => {
    this.setState({ alignment });
  };

  changeToListView() {
    this.setState({
      listView: true,
      gridView: false
    });
  }

  changeToGridView() {
    this.setState({
      listView: false,
      gridView: true
    });
  }

  handleSort = () => {
    if (this.state.descendingSort) {
      this.setState({
        descendingSort: false
      });
    } else {
      this.setState({
        descendingSort: true
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { posts, isNotFound } = this.props.posts;

    if (this.state.descendingSort) {
      this.props.posts.posts.sort(function(a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    } else {
      this.props.posts.posts.sort(function(a, b) {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    }

    if (isNotFound) {
      alert("We can not find the posts you are looking for");
      this.props.auth
        .getAccessToken()
        .then(token => {
          this.props.getPostsActions(token);
        })
        .catch(err => console.log(err));
    }
    if (posts.length >= 1) {
      const renderCardListView = posts.map(post => (
        <Grid item xs={8}>
          <ExploreCard
            hash_id={post.hash_id}
            title={post.title}
            summary={post.summary}
            views={post.views}
            create_at={moment(post.created_at).format("MMMM DD, YYYY hh:mm:ss")}
            tags={post.tags}
            preview_img={post.preview_img}
            authors={post.authors}
          />
        </Grid>
      ));

      return (
        <div style={{ marginTop: 70 }}>
          <Grid container direction="row" justify="center">
            <Grid item xs={3} className={classes.FilterResultContainer}>
              <FilterResult />
            </Grid>

            <Grid item xs={12} className={classes.SortBarContainerListView}>
              <div className={classes.SortBar}>
                {" "}
                <Sort className={classes.SortIcon} />
                <Button
                  onClick={this.handleSort}
                  className={classes.SortBarText}
                >
                  Sort by Date{" "}
                  {this.state.descendingSort ? (
                    <KeyboardArrowDown />
                  ) : (
                    <KeyboardArrowUp />
                  )}
                </Button>
              </div>
            </Grid>
            <Grid item xs={8}>
              <Grow
                in={this.state.listView}
                style={{ transformOrigin: "0 0 0" }}
                {...(this.state.listView ? { timeout: 1300 } : {})}
              >
                <div style={{ marginBottom: 100 }}>{renderCardListView}</div>
              </Grow>
            </Grid>
          </Grid>
        </div>
      );
    }

    return (
      <div className={classes.LoadingScreen}>
        <MDSpinner
          style={{
            height: 60,
            width: 60,
            marginLeft: 30
          }}
        />
        <Typography style={{ fontSize: 30, marginTop: 21 }}>
          Gathering Your Insights
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPostsActions }
)(withAuth(withStyles(styles)(Explore)));
