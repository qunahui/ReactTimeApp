var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
// npm install babel-preset-stage-0 --save-dev
// support new features

require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App CSS
require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById("app")
);
