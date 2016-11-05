var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '566e1e84f0f54d3e8a2217362b37d5dd';
var sentryApp = '111453';
var sentryUrl = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'master',
  version: '1.0'
};

Raven.config(sentryUrl, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install();

ReactDom.render(
  routes,
  document.getElementById('app')
);
