export default {
  oidc: {
    clientId: "0oa1rdkuoj3YELLJL357",
    issuer: "https://dev-696434.okta.com/oauth2/default",
    redirectUri: "http://localhost:8080/implicit/callback",
    scope: "openid profile email"
  },
  resourceServer: {
    messagesUrl: "http://localhost:8000/api/messages"
  }
};