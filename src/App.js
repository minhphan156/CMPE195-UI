import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import config from "./.samples.config";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/public_pages/layout/Navbar";
import Footer from "./components/public_pages/layout/Footer";

import LandingPage from "./components/public_pages/landing_page/LandingPage";
import SerucityManifestoPage from "./components/public_pages/security_manifesto/SecurityManifestoPage.js";
import AboutPage from "./components/public_pages/about_page/AboutPage";
import HowItWorks from "./components/public_pages/how_it_works_page/HowItWorksPage";
import TermsOfService from "./components/public_pages/terms_of_service_page/TermsOfServicePage";
import AccessToken from "./components/dev/AccessToken";
import LoginPage from "./Login";

import Post from "./components/post/Post";
import Upload from "./components/upload/Upload";
import Preview from "./components/post/PreviewOfPost";
import Explore from "./components/explore/Explore";

function customAuthHandler({ history }) {
  // Redirect to the /login page that has a CustomLoginComponent
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Security
              issuer={config.oidc.issuer}
              client_id={config.oidc.clientId}
              redirect_uri={config.oidc.redirectUri}
              onAuthRequired={customAuthHandler}
            >
              <Navbar />

              <Switch>
                <Route exact path="/" exact component={LandingPage} />
                <Route
                  exact
                  path="/security-manifesto"
                  component={SerucityManifestoPage}
                />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/how-it-works" component={HowItWorks} />
                <Route
                  exact
                  path="/terms-of-service"
                  component={TermsOfService}
                />
                <Route exact path="/login" component={LoginPage} />

                {/* Secure Routes */}
                <SecureRoute
                  exact
                  path="/dev/access-token"
                  component={AccessToken}
                />

                <SecureRoute exact path="/upload" component={Upload} />
                <SecureRoute exact path="/post" component={Post} />
                <SecureRoute exact path="/explore" component={Explore} />
                <SecureRoute exact path="/preview" component={Preview} />
              </Switch>

              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Footer />
            </Security>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
