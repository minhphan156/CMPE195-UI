import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grow, Grid, Typography } from "@material-ui/core";
import ExploreCard from "./ExploreCard";
import ExploreCardGridView from "./ExploreCardGridView";
import FilterResult from "./FilterResult";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { connect } from "react-redux";
import { getPostsActions } from "../../actions/getPostsActions";
import { withAuth } from "@okta/okta-react";
import MDSpinner from "react-md-spinner";
import moment from "moment";
import Sort from "@material-ui/icons/Sort"; //sorting icon

const styles = {
  FilterButtonGroup: {
    fontSize: 12
  },
  selectedButton: {
    backgroundColor: "#BFE3EE !important",
    fontWeight: "bold"
  },
  ToggleButtonGroupContainerListView: {
    width: "fit-content",
    borderRadius: 17,
    marginLeft: 430,
    marginBottom: 5
  },
  ToggleButtonGroupContainerGridView: {
    width: "fit-content",
    borderRadius: 17,
    marginLeft: 115,
    marginBottom: 5
  },
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
    top: 81,
    left: -35,
    zIndex: 1,
    height: 80,
    width: 2300,
    alignItems: "flex-end",
    backgroundColor: "white"
  },
  SortBarContainerGridView: {
    display: "flex",
    position: "fixed",
    top: 81,
    left: -314,
    zIndex: 1,
    height: 80,
    width: 2300,
    alignItems: "flex-end",
    backgroundColor: "white"
  },
  SortBar: {
    display: "flex",
    marginTop: 17,
    marginLeft: 651,
    color: "#F0605C"
  },
  SortBarText: {
    fontSize: 15
  },
  RenderCardGridViewSpacing: {
    marginLeft: 110
  }
};
class Explore extends Component {
  constructor() {
    super();
    this.state = {
      listView: true,
      gridView: false,
      alignment: "" //state to handle group button click highlight
    };
    this.handleAlignment = this.handleAlignment.bind(this);
    this.changeToListView = this.changeToListView.bind(this);
    this.changeToGridView = this.changeToGridView.bind(this);
  }

  componentDidMount() {
    // this.props.auth
    //   .getAccessToken()
    //   .then(token => {
    //     this.props.getPostsActions(token);
    //   })
    //   .catch(err => console.log(err));
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

  render() {
    const { classes } = this.props;
    const { alignment } = this.state;
    const { posts } = this.props.posts;

    console.log("explore component posts ", posts);

    if (posts.length > 1) {
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

      const renderCardGridView = posts.map(post => (
        <Grid item xs={6}>
          <ExploreCardGridView
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
          <Grid
            container
            direction="row"
            justify="center"
            style={{ marginTop: 87 }}
          >
            {this.state.listView && (
              <Grid item xs={12} className={classes.SortBarContainerListView}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  selected
                  onChange={this.handleAlignment}
                  className={classes.ToggleButtonGroupContainerListView}
                >
                  <ToggleButton
                    classes={{ selected: classes.selectedButton }}
                    className={classes.FilterButtonGroup}
                    value="left"
                    onClick={this.changeToListView}
                  >
                    List view
                  </ToggleButton>

                  <ToggleButton
                    classes={{ selected: classes.selectedButton }}
                    className={classes.FilterButtonGroup}
                    value="right"
                    onClick={this.changeToGridView}
                  >
                    Grid view
                  </ToggleButton>
                </ToggleButtonGroup>

                <div className={classes.SortBar}>
                  <Typography className={classes.SortBarText}>
                    Sort:{" "}
                  </Typography>
                  <Sort />
                </div>
              </Grid>
            )}

            {this.state.gridView && (
              <Grid item xs={12} className={classes.SortBarContainerGridView}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  selected
                  onChange={this.handleAlignment}
                  className={classes.ToggleButtonGroupContainerListView}
                >
                  <ToggleButton
                    classes={{ selected: classes.selectedButton }}
                    className={classes.FilterButtonGroup}
                    value="left"
                    onClick={this.changeToListView}
                  >
                    List view
                  </ToggleButton>

                  <ToggleButton
                    classes={{ selected: classes.selectedButton }}
                    className={classes.FilterButtonGroup}
                    value="right"
                    onClick={this.changeToGridView}
                  >
                    Grid view
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            )}

            {this.state.listView && (
              <Grid item xs={3} className={classes.FilterResultContainer}>
                <FilterResult />
              </Grid>
            )}
            {this.state.listView && (
              <div>
                <Grid item xs={8}>
                  <Grow
                    in={this.state.listView}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(this.state.listView ? { timeout: 1300 } : {})}
                  >
                    <div>{renderCardListView}</div>
                  </Grow>
                </Grid>
              </div>
            )}

            {this.state.gridView && (
              <Grow
                in={this.state.gridView}
                style={{ transformOrigin: "0 0 0" }}
                {...(this.state.gridView ? { timeout: 1300 } : {})}
              >
                <Grid
                  container
                  spacing={8}
                  className={classes.RenderCardGridViewSpacing}
                >
                  {renderCardGridView}
                </Grid>
              </Grow>
            )}
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
