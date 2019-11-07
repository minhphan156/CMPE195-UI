import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class SecurityContainers extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };
    }

    async componentDidMount() {}

    async componentDidUpdate() {}

    render() {
      return (
        <div id="SecurityContainerAll">
          <Grid
            container
            spacing={0}
            id="SecurityContainerOne"
            alignItems="flex-start"
            direction="row"
            justify="flex-start"
          >
            <Grid id="SecurityManifestoTitle" item xs={9} lg={5}>
              Access
            </Grid>
            <Grid id="SecurityManifestoText" item xs={9} lg={9}>
              We require access control to both the client UI and the backend
              APIs in order to only allow logged in, authorized users access to
              your data. SURD uses a single identity provider, Okta. Okta is a
              world leader for authentication services.
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            id="SecurityContainerTwo"
            alignItems="flex-start"
            direction="row"
            justify="flex-start"
          >
            <Grid id="SecurityManifestoTitle" item xs={9} lg={5}>
              At Rest
            </Grid>
            <Grid id="SecurityManifestoText" item xs={9} lg={9}>
              All notebooks (original and rendered), as well as any images are
              stored in AWS S3 buckets. All your data and metadata is encrypted
              at rest using an industry-standard AES-256 encryption algorithm.
              Encryption and decryption is handled automatically and
              transparently.
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            id="SecurityContainerThree"
            alignItems="flex-start"
            direction="row"
            justify="flex-start"
          >
            <Grid id="SecurityManifestoTitle" item xs={9} lg={5}>
              In Transit
            </Grid>
            <Grid id="SecurityManifestoText" item xs={9} lg={9}>
              Our services live on the cloud and we use HTTPS protocol for them
              to securely communicate to one another. HTTPS uses an encryption
              protocol to encrypt communications. The protocol is called
              Transport Layer Security (TLS). This type of security system uses
              two different keys to encrypt communications between 2 parties;
              The private key is controlled by the owner of a website. It is
              used to decrypt information encrypted by the public key. The
              public key which is available to everyone who wants to talk to the
              server securely. The information can only be decrypted by the
              private key.
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
