/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
import ReactDOM from "react-dom";

import React, { Component } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import "@okta/okta-signin-widget/dist/css/okta-theme.css";

import config from "./.samples.config";

export default class LoginPage extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: config.oidc.issuer.split("/oauth2")[0],
      clientId: config.oidc.clientId,
      redirectUri: config.oidc.redirectUri,
      logo: "logo_blue.png",
      i18n: {
        en: {
          "primaryauth.title": "Sign in to SURD"
        }
      },
      authParams: {
        responseType: ["id_token", "token"],
        issuer: config.oidc.issuer,
        display: "page",
        scopes: config.oidc.scope.split(" ")
      }
    });
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div id="LoginPage" />;
  }
}
