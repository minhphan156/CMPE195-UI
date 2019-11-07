import React, { Component } from "react";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";
import HowItWorksHeader from "./HowItWorksHeader";
import HowItWorksContainer from "./HowItWorksContainer";

export default withAuth(
  class HowItWorksPage extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };

      /// that stuff isnt there in OKTA version
      // this.logout = this.logout.bind(this);
    }

    async componentDidMount() {}

    async componentDidUpdate() {}

    async login() {
      // Redirect to '/' after login
      this.props.auth.login("/");
    }

    render() {
      return (
        <div>
          <div id="AboutManifestoPageBody">
            <HowItWorksHeader />
            <HowItWorksContainer />
          </div>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
