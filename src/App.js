import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import config from "./.samples.config";

// import Home from './Home';
// import CustomLoginComponent from './Login';
// import Messages from './Messages';
// import { Container } from "semantic-ui-react";
import Navbar from "./components/public_pages/layout/Navbar";
import Footer from "./components/public_pages/layout/Footer";

// import Profile from './Profile';

import { Provider } from "react-redux";
import store from "./store";

import LandingPage from "./components/public_pages/landing_page/LandingPage";
import SerucityManifestoPage from "./components/public_pages/security_manifesto/SecurityManifestoPage.js";
import AboutPage from "./components/public_pages/about_page/AboutPage";
import HowItWorks from "./components/public_pages/how_it_works_page/HowItWorksPage";
import ContactUs from "./components/public_pages/contact_us_page/ContactUsPage";
import RequestAccess from "./components/public_pages/request_early_access_page/RequestAccessPage";
import TermsOfService from "./components/public_pages/terms_of_service_page/TermsOfServicePage";
// import SignIn from "./components/public_pages/signin_page/SignInPage";
import AccessToken from "./components/dev/AccessToken";

import Login from "./Login";
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
                <Route exact path="/contact-us" component={ContactUs} />
                <Route exact path="/request-access" component={RequestAccess} />
                <Route exact path="/dev/access-token" component={AccessToken} />
                <Route
                  exact
                  path="/terms-of-service"
                  component={TermsOfService}
                />
                {/* <Route exact path="/SignIn" component={SignIn} /> */}
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/preview" component={Preview} />	
                <Route exact path="/login" component={Login} />
              </Switch>

              <Route path="/implicit/callback" component={ImplicitCallback} />
              {/* <SecureRoute path="/messages" component={Messages} /> */}
              {/* <SecureRoute path="/profile" component={Profile} /> */}
              {/* </Container> */}

              <Footer />
            </Security>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
