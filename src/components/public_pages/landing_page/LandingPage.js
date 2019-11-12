import React, { Component } from "react";
import { checkAuthentication } from "../../../helpers/checkAuthHelper";
import "../styles_for_components/LandingPage.css";
import { withAuth } from "@okta/okta-react";
import ServiceOverview from "./ServiceOverview.js";
import ContainerTwo from "./ContainerTwo.js";
import LandingHeader from "./LandingHeader.js";

export default withAuth(
  class LandingPage extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };
      this.checkAuthentication = checkAuthentication.bind(this);
      this.login = this.login.bind(this);

      /// that stuff isnt there in OKTA version
      // this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
      this.checkAuthentication();
      window.scrollTo(0, 0);
    }

    async componentDidUpdate() {
      await this.checkAuthentication();
    }

    async login() {
      // Redirect to '/' after login
      this.props.auth.login("/");
    }

    render() {
      const resourceServerExamples = [
        {
          label: "Node/Express Resource Server Example",
          url:
            "https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server"
        },
        {
          label: "Java/Spring MVC Resource Server Example",
          url:
            "https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server"
        }
      ];

      if (this.state.authenticated != null) {
        if (this.state.authenticated) {
          this.props.history.push("/explore");
          return null;
        } else {
          return (
            <div>
              <div>
                {!this.state.authenticated && (
                  <div id="LandingPageBody">
                    <LandingHeader />
                    <ServiceOverview />
                    <ContainerTwo />
                  </div>
                )}
              </div>
              )}
            </div>
          );
        }
      } else return null;
    }
  }
);

const mapStateToProps = state => ({});
