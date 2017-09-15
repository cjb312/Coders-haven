// packages
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

// components / views / styles
require("./css/style.scss");
import Routes from "./Routes";

// 9/10 11:42am
// for redux. redux needs to have a store which delegates changes. look more into that.
// thunk is a redux middleware that allows for async functions
const store = createStore(
	(state = {}) => state,
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}
			routes={Routes}
		/>
	</Provider>, document.getElementById("App"));


// userauth branch
