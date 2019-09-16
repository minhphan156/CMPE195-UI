import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


class AccessToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken:  null,
      isDialogOpen: false
    };
  };

  // Get access token from Okta
  async componentDidMount() {
    this.setState({
      accessToken: await this.props.auth.getAccessToken(),
    });
  }
  
  // Copies acess key from the text area to the clipboard
  copyAccessKey = (e) => {
    e.target.select();
    document.execCommand('copy');

    // Remove the text selection
    e.target.selectionStart = e.target.selectionEnd;

    // Open Dialog
    this.handleOpen();
  }
  
  handleOpen = () => {
    this.setState({ isDialogOpen: true });
  }
  
  handleClose = () => {
    this.setState({ isDialogOpen: false });
  }

  render() {
    return (
      <div style={ { margin: "20px 0"} }>
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Typography variant="h5">
              Access Token
            </Typography>
            <Typography variant="caption">Click the textfield to copy to clipboard.</Typography>
            <TextField onClick={this.copyAccessKey} multiline="true" fullWidth="true" placeholder="Must log in first!" value={this.state.accessToken} />
          </Grid>
          <Grid item xs={3} />
        </Grid>

        {/* Copied to clipboard dialog */}
        <Dialog
          open={this.state.isDialogOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Copied to clipboard!"}</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


export default withAuth(AccessToken);