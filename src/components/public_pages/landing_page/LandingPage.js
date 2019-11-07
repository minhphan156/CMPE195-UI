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

    ///// THIS IS NOT USED IN THE OKTA PART
    // async logout() {
    //   // Redirect to '/' after logout
    //   this.props.auth.logout("/");
    // }

    // onClick(e) {
    //   this.props.getPricing();
    // }
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

      // if (this.state.authenticated === null) return null;
      // return this.state.authenticated ? (
      //   <button onClick={this.logout}>Logout</button>
      // ) : (
      //   <button onClick={this.login}>Login</button>
      // );

      return (
        <div>
          {this.state.authenticated !== null && (
            <div>
              {this.state.authenticated && (
                <div>
                  <p>Welcome back, {this.state.userinfo.name}!</p>
                  <p>
                    You have successfully authenticated against your Okta org,
                    and have been redirected back to this application. You now
                    have an ID token and access token in local storage. Visit
                    the <a href="/profile">My Profile</a> page to take a look
                    inside the ID token.
                  </p>
                  <h3>Next Steps</h3>
                  <p>
                    Currently this application is a stand-alone front end
                    application. At this point you can use the access token to
                    authenticate yourself against resource servers that you
                    control.
                  </p>
                  <p>
                    This sample is designed to work with one of our resource
                    server examples. To see access token authentication in
                    action, please download one of these resource server
                    examples:
                  </p>
                  <ul>
                    {resourceServerExamples.map(example => (
                      <li key={example.label}>
                        <a href={example.url}>{example.label}</a>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Once you have downloaded and started the example resource
                    server, you can visit the{" "}
                    <a href="/messages">My Messages</a> page to see the
                    authentication process in action.
                  </p>
                </div>
              )}
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
  }
);

const mapStateToProps = state => ({});

// export default connect(
//   mapStateToProps,
//   { getPricing }
// )(LandingPage);
