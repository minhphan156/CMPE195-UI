import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Card, Typography } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import moment from "@date-io/moment";
import ChipInput from "material-ui-chip-input";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { connect } from "react-redux";
import { withAuth } from "@okta/okta-react";
import { getFilteredPostsActions } from "../../actions/getPostsActions";

const styles = {
  FilterContainer: {
    width: 240,
    paddingBottom: 10,
    position: "fixed"
  },
  FilterHeaderContainer: {
    background: "linear-gradient(to right, #3d4e96, #3d4e96, #2c76a9)"
  },
  Header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    height: 40
  },
  FilterButtonGroup: {
    fontSize: 12
  },
  selectedButton: {
    backgroundColor: "#BFE3EE !important",
    fontWeight: "bold"
  },
  ToggleButtonGroupContainer: {
    width: "fit-content",
    marginTop: 20,
    borderRadius: 17
  },
  SubHeader: {
    fontSize: 15,
    marginTop: 10
  },
  DatePicker: {
    width: 115
  },
  DatePickerContainer: {
    marginBottom: 10
  },
  ButtonDocType: {
    fontSize: 13,
    marginRight: 7,
    marginTop: 6,
    marginBottom: 12,
    padding: 0,
    textTransform: "none",
    borderRadius: 21,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#2B76A8"
  },
  ApplyChangeButton: {
    marginTop: 30,
    marginLeft: 10,
    width: 200
  },
  MiddleLineToggle: {
    borderRight: "solid #f2f2f2",
    height: 32
  }
};

class FilterResult extends Component {
  constructor() {
    super();
    this.state = {
      alignment: "left", //state to handle group button click highlight
      tags: [],
      startDate: null,
      endDate: null,

    };
    this.handleAlignment = this.handleAlignment.bind(this);
    this.handleAddTags = this.handleAddTags.bind(this);
    this.handleDeleteTags = this.handleDeleteTags.bind(this);
  }


  //this handle the highlight of button group
  handleAlignment = (event, alignment) => {
    console.log("handle alignment filter results");
    this.setState({ alignment });
  };
  // add hashtags
  handleAddTags(tags) {
    this.setState({
      tags: [...this.state.tags, tags]
    });
  }

  // delete hashtags
  handleDeleteTags(deletedTags) {
    this.setState({
      tags: this.state.tags.filter(tag => tag !== deletedTags)
    });
  }

  handleFilter = () => {
    const filterQuery = {
      tags: this.state.tags,
      startDate: this.state.startDate ? new Date(this.state.startDate).toISOString() : null,
      endDate: this.state.endDate ? new Date(this.state.endDate + ' 23:00:00').toISOString() : null,
    }
    
    this.props.auth
    .getAccessToken()
    .then(token => {
      this.props.getFilteredPostsActions(filterQuery,token);
    })
    .catch(err => console.log(err));

   
  }

  handleStartDateChange = (event) => {
    this.setState({
      startDate: event.format('MM/DD/YYYY'),
    })
  }
  handleEndDateChange = (event) => {
    this.setState({
      endDate: event.format('MM/DD/YYYY'),
    })
  }
  
  render() {
    
    const { classes } = this.props;
    const { alignment } = this.state;

    return (
      <Card className={classes.FilterContainer}>
        <div className={classes.FilterHeaderContainer}>
          <Typography className={classes.Header} variant="h6">
            Filter Results
          </Typography>
        </div>

        <div
          style={{ marginLeft: 10, display: "flex", flexDirection: "column" }}
        >
          <div>
            <Typography variant="h6" className={classes.SubHeader} gutterBottom>
              Date Range
            </Typography>

            <MuiPickersUtilsProvider utils={moment}>
              <div className={classes.DatePickerContainer}>
              <DatePicker
                  onChange={(event) => {this.handleStartDateChange(event)}}
                  value ={this.state.startDate}
                  label="From"
                  format="MM/DD/YYYY"
                  className={classes.DatePicker}
                />
                <DatePicker
                  onChange={(event) => {this.handleEndDateChange(event)}}
                  value ={this.state.endDate}
                  label="To"
                  format="MM/DD/YYYY"
                  className={classes.DatePicker}
                />
              </div>
            </MuiPickersUtilsProvider>
          </div>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={this.handleAlignment}
            className={classes.ToggleButtonGroupContainer}
          >
            <ToggleButton
              className={classes.FilterButtonGroup}
              classes={{ selected: classes.selectedButton }}
              value="left"
            >
              Viewed
            </ToggleButton>

            <ToggleButton
              classes={{ selected: classes.selectedButton }}
              className={classes.FilterButtonGroup}
              value="center"
            >
              Unviewed
            </ToggleButton>

            <ToggleButton
              classes={{ selected: classes.selectedButton }}
              className={classes.FilterButtonGroup}
              value="right"
            >
              All
            </ToggleButton>
          </ToggleButtonGroup>
          <div>
            <Typography variant="h6" className={classes.SubHeader} gutterBottom>
              Tags
            </Typography>
            <MuiThemeProvider>
              <ChipInput
                fullWidth="true"
                value={this.state.tags}
                onRequestAdd={chip => this.handleAddTags(chip)}
                onRequestDelete={(chip, index) =>
                  this.handleDeleteTags(chip, index)
                }
              />
            </MuiThemeProvider>
          </div>
          <div>
            <Typography variant="h6" className={classes.SubHeader} gutterBottom>
              Document Types
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className={classes.ButtonDocType}
            >
              Jupyter
            </Button>
          </div>

          <Button
            variant="contained"
            color="secondary"
            className={classes.ApplyChangeButton}
            onClick={this.handleFilter}
          >
            APPLY CHANGES
          </Button>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {getFilteredPostsActions}
)(withAuth(withStyles(styles)(FilterResult)));
