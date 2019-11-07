import React, { Component } from "react";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";
import ContactUsHeader from "./ContactUsHeader";
import ContactUsContainer from "./ContactUsContainer";

export default withAuth(
  class ContactUsPage extends Component {
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
            <ContactUsHeader />
            <ContactUsContainer />
          </div>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
