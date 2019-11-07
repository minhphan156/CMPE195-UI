import React, { Component } from "react";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";
import SecurityHeader from "./SecurityHeader";
import SecurityContainers from "./SecurityContainers";

export default withAuth(
  class SerucityManifestoPage extends Component {
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
          <div id="SecurityManifestoPageBody">
            <SecurityHeader />
            <SecurityContainers />
          </div>
        </div>
      );
    }
  }
);

const mapStateToProps = state => ({});
