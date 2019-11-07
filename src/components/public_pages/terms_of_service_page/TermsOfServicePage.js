import React, { Component } from "react";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";
import TermsOfServiceHeader from "./TermsOfServiceHeader";
import TermsOfServiceContainer from "./TermsOfServiceContainer";

export default withAuth(
  class TermsOfServicePage extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };

      /// that stuff isnt there in OKTA version
      // this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
      window.scrollTo(0, 0);
    }

    async componentDidUpdate() {}

    async login() {
      // Redirect to '/' after login
      this.props.auth.login("/");
    }

    render() {
      return (
        <div>
          <div id="AboutManifestoPageBody">
            <TermsOfServiceHeader />
            <TermsOfServiceContainer />
          </div>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
